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
        url: "/Dashboard",
        icon: SquareTerminal,
        isActive: true,
        items: [
          {
            title: "Payin Dashboard",
            url: "/Dashboard/Payin",
          },
          {
            title: "Payout Dashboard",
            url: "/Dashboard/Payout",
          },
        ],
      },
      {
        title: "Payout",
        url: "#",
        icon: Bot,
        items: [
          {
            title: "Add Balance",
            url: "AddBalance",
          },
          {
            title: "Payment",
            url: "#",
          },
          {
            title: "Passbook",
            url: "#",
          },
          {
            title: "Api Keys",
            url: "#",
          },
        ],
      },
      {
        title: "Reports",
        url: "#",
        icon: BookOpen,
        items: [
          {
            title: "Payin Report",
            url: "#",
          },
          {
            title: "Payout Report",
            url: "#",
          },
          {
            title: "Archive Report",
            url: "#",
          },
        ],
      },
      {
        title: "Download Center",
        url: "#",
        icon: GalleryVerticalEnd,
        noArrow: true,
      },
      {
        title: "User Management",
        url: "#",
        icon: Map,
        items:[
          {
            title: "Sub Merchant List",
            url: "#",
          },
          {
            title: "Login History",
            url: "#",
          },
        ]
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