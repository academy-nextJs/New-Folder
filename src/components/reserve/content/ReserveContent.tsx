import CommonInput from '@/components/common/inputs/common/CommonInput'
import React, { useState } from 'react'
import ReserveCard from '../card/ReserveCard'
import ReserveMap from '../map/ReserveMap'
import { IHouse } from '@/types/houses-type/house-type'
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationLink,
  PaginationNext,
} from '@/components/ui/pagination'
import ReserveCardSkeleton from '../card/ReserveCardSkeleton'

interface IReserveContent {
  houses: IHouse[]
  isLoading: boolean
  setMinPrice: React.Dispatch<React.SetStateAction<number | ''>>
  setMaxPrice: React.Dispatch<React.SetStateAction<number | ''>>
  setLocation: React.Dispatch<React.SetStateAction<string>>
}

const ReserveContent: React.FC<IReserveContent> = ({ houses, isLoading, setMaxPrice, setMinPrice }) => {

  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 5
  const totalPages = Math.ceil(houses.length / itemsPerPage)

  const paginatedHouses = houses.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )

  const goToPage = (page: number) => {
    if (page < 1 || page > totalPages) return
    setCurrentPage(page)
  }

  return (
    <div className="flex xl:flex-row flex-col gap-4 justify-between w-full xl:h-[1080px] overflow-hidden rounded-[40px] bg-secondary-light4 p-4">
      <div className="flex gap-6 flex-col xl:w-3/5 w-full">
        <div className="flex gap-4 w-full">
          <div className="w-1/2">
            <CommonInput
              onchange={(e) => setMinPrice(Number(e.target.value))}
              label="حداقل قیمت"
              classname="px-4 py-2 border-subText w-full outline-none"
              color="text-subText"
              placeholder="0 تومان"
            />
          </div>
          <div className="w-1/2">
            <CommonInput
              onchange={(e) => setMaxPrice(Number(e.target.value))}
              label="حداکثر قیمت"
              classname="px-4 py-2 border-subText w-full outline-none"
              color="text-subText"
              placeholder="0 تومان"

            />
          </div>
        </div>
        <div className="w-full border dark:border-[#4E4E4E] border-[#9E9E9E]" />

        <div className='flex flex-col justify-between h-full'>
          <div className="flex flex-col gap-6" id='items'>
            {isLoading ? (
              Array.from({ length: 4 }).map((_, idx) => (
                <ReserveCardSkeleton key={idx} />
              ))
            ) : (
              paginatedHouses.map((item, idx) => (
                <ReserveCard key={idx} items={item} />
              ))
            )}
          </div>
          {paginatedHouses.length == 0 && ( <span className='text-sm font-semibold mx-auto'> درحال حاضر هیچ آگهی وجود ندارد </span> )}

          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  onClick={() => goToPage(currentPage - 1)}
                  {...(currentPage === 1 && { disabled: true })}
                />
              </PaginationItem>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <PaginationItem key={page}>
                  <PaginationLink
                    onClick={() => goToPage(page)}
                    isActive={page === currentPage}
                    href="#items"
                  >
                    {page}
                  </PaginationLink>
                </PaginationItem>
              ))}

              <PaginationItem>
                <PaginationNext
                  onClick={() => goToPage(currentPage + 1)}
                  {...(currentPage === totalPages && { disabled: true })}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>

      <div className="bg-secondary-light3 rounded-[40px] xl:w-2/5 w-full h-[1032px] xl:block hidden">
        <ReserveMap />
      </div>
    </div>
  )
}

export default ReserveContent
