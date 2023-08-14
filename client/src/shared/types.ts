export enum SelectedPage {
    Home = "home",
    Benefits = "benefits",
    About = "about",
    Plans = "plans",
    contact = "contact",
    Merch = "merch",
  }

  export interface BenefitType {
    icon: JSX.Element;
    title: string;
    description: string;
  }

  export interface PlanType {
    name: string;
    description?: string;
    image?: string;
  }