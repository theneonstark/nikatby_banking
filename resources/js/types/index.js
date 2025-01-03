import {
    AudioWaveform,
    BookOpen,
    Bot,
    Command,
    Frame,
    GalleryVerticalEnd,
    Map,
    PieChart,
    Settings2,
    SquareTerminal,
  } from "lucide-react"

export const data = {
    user: {
      name: "Nikatby",
      email: "nikatbypay@gmail.com",
      avatar: "/avatars/shadcn.jpg",
    },
    teams: [
      {
        name: "Nikatby",
        logo: GalleryVerticalEnd,
        plan: "Nikatby",
      },
      // {
      //   name: "Acme Corp.",
      //   logo: AudioWaveform,
      //   plan: "Startup",
      // },
      // {
      //   name: "Evil Corp.",
      //   logo: Command,
      //   plan: "Free",
      // },
    ],
    navMain: [
      {
        title: "Dashboard",
        url: "#",
        icon: SquareTerminal,
        isActive: true,
        items: [
          {
            title: "Payin Dashboard",
            url: "/dashboard/Payin",
          },
          {
            title: "Payout Dashboard",
            url: "/dashboard/Payout",
          },
        ],
      },
      {
        title: "Payment Resource",
        url: "#",
        icon: Bot,
        items: [
          {
            title: "QR Money",
            url: "/pay/qrcode",
          },
          {
            title: "Upi Add Money",
            url: "/pay/upirequest",
          },
          {
            title: "Add Fund",
            url: "/pay/addfund",
          },
          // {
          //   title: "Api Keys",
          //   url: "#",
          // },
        ],
      },
      {
        title: "Reports",
        url: "#",
        icon: BookOpen,
        items: [
          {
            title: "Transaction",
            url: "/reports/transaction",
          },
          {
            title: "Ledger",
            url: "/reports/ledger",
          },
          // {
          //   title: "Archive Report",
          //   url: "#",
          // },
        ],
      },
      {
        title: "Support",
        url: "/Support",
        icon: GalleryVerticalEnd,
        noArrow: true,
      },
      {
        title: "Credentials",
        url: "/Credentials",
        icon: Map,
        noArrow: true,
        // items:[
        //   {
        //     title: "Sub Merchant List",
        //     url: "#",
        //   },
        //   {
        //     title: "Login History",
        //     url: "#",
        //   },
        // ]
      },
    ],
    // projects: [
    //   {
    //     name: "Design Engineering",
    //     url: "#",
    //     icon: Frame,
    //   },
    //   {
    //     name: "Sales & Marketing",
    //     url: "#",
    //     icon: PieChart,
    //   },
    //   {
    //     name: "Travel",
    //     url: "#",
    //     icon: Map,
    //   },
    // ],
  }