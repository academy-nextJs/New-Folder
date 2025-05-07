'use client'
import React, { useEffect, useState } from 'react'
import RentalHeader from './header/RentalHeader'
import RentalFilter from './filter/RentalFilter'
import RentalFilterCap from './filter/RentalFilterCap'
import RentalCard from './card/RentalCard'
import { getHouses } from '@/utils/service/api/houses-api'
import { IHouse } from '@/types/houses-type/house-type'
import RentalCardSkeleton from './card/RentalCardSkeleton'
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationLink,
  PaginationNext,
} from '@/components/ui/pagination'

const RentalComponent = () => {
  const [search, setSearch] = useState<string>('')
  const [order, setOrder] = useState<'DESC' | 'ASC'>('DESC')
  const [sort, setSort] = useState<string>('')
  const [location, setLocation] = useState<string>('')
  const [houses, setHouses] = useState<IHouse[]>([])
  const [propertyType, setPropertyType] = useState<string>('')
  const [minRent, setMinRent] = useState<number | "">('')
  const [maxRent, setMaxRent] = useState<number | "">('')
  const [minMortgage, setMinMortgage] = useState<number | "">('')
  const [maxMortgage, setMaxMortgage] = useState<number | "">('')
  const [minArea, setMinArea] = useState<number | "">('')
  const [maxArea, setMaxArea] = useState<number | "">('')
  const [isLoading, setIsLoading] = useState<boolean>(true)

  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 10
  const totalPages = Math.ceil(houses.length / itemsPerPage)

  const paginatedHouses = houses.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )

  const goToPage = (page: number) => {
    if (page < 1 || page > totalPages) return
    setCurrentPage(page)
  }

  const fetchHouses = async () => {
    setIsLoading(true)
    try {
      const response = await getHouses("", search, order, sort, location,
        propertyType, '', '', minRent, maxRent, minMortgage, maxMortgage, minArea, maxArea)
      setHouses(response)
      setCurrentPage(1)
    } catch (error) {
      console.error('Error fetching houses:', error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchHouses()
  }, [])

  useEffect(() => {
    fetchHouses()
  }, [search, order, sort, location, minRent, maxRent, minMortgage, maxMortgage, minArea, maxArea, propertyType])

  return (
    <div className='px-8 flex flex-col gap-4'>
      <RentalHeader />
      <RentalFilter
        setOrder={setOrder}
        setSort={setSort}
        setSearch={setSearch}
        houseLength={houses.length}
        setLocation={setLocation}
        setPropertyType={setPropertyType}
      />
      <RentalFilterCap
        setMinRent={setMinRent}
        setMaxRent={setMaxRent}
        setMinMortgage={setMinMortgage}
        setMaxMortgage={setMaxMortgage}
        setMinArea={setMinArea}
        setMaxArea={setMaxArea}
      />
      <div className='flex gap-8 mt-[20px] w-full flex-wrap' id="rental-items">
        {isLoading ? (
          Array.from({ length: itemsPerPage }).map((_, idx) => (
            <RentalCardSkeleton key={idx} />
          ))
        ) : (
          paginatedHouses.map((item, idx) => (
            <RentalCard key={idx} items={item} />
          ))
        )}
      </div>

      {!isLoading && houses.length > 0 && (
        <Pagination>
          <PaginationContent className='justify-center mt-6'>
            <PaginationItem>
              <PaginationPrevious onClick={() => goToPage(currentPage - 1)} />
            </PaginationItem>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <PaginationItem key={page} onClick={() => goToPage(page)}>
                <PaginationLink isActive={page === currentPage} href="#rental-items">
                  {page}
                </PaginationLink>
              </PaginationItem>
            ))}
            <PaginationItem>
              <PaginationNext onClick={() => goToPage(currentPage + 1)} />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )}

      {!isLoading && paginatedHouses.length === 0 && (
        <span className='text-sm font-semibold mx-auto mt-4'>
          درحال حاضر هیچ خانه‌ای مطابق با فیلتر وجود ندارد
        </span>
      )}
    </div>
  )
}

export default RentalComponent
