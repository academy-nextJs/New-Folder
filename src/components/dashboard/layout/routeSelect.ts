import { CreditCard, SquaresSubtract } from "lucide-react";
import { routes, sellerRoutes } from "./routes/routes";

export const routeSelect = true ? routes : sellerRoutes;
export const footerSidebarSelect = true ? 
{
    title: 'کیف پول',
    description: 'عدم موجودی',
    icon: CreditCard
} : {
    title: 'نظرات جدید',
    description: '5 نظر',
    icon: SquaresSubtract
}
