import { CreditCard, SquaresSubtract } from "lucide-react";
import { routes, sellerRoutes } from "./routes/routes";

export const routeSelect = false ? routes : sellerRoutes;
export const footerSidebarSelect = true
  ? {
      title: "wallet",
      description: "noBalance",
      icon: CreditCard,
    }
  : {
      title: "newComments",
      description: "commentsCount",
      icon: SquaresSubtract,
    };
