import image_footer_img_3 from "@/imports/footer-img-3.png";
import image_Sensex_data_4 from "@/imports/Sensex-data-4.png";
import image_header_img_5 from "@/imports/header-img-5.png";
import image_footer_img from "@/imports/footer-img.png";
import image_Sensex_data from "@/imports/Sensex-data.png";
import image_header_img_1 from "@/imports/header-img-1.png";
import { useState } from "react";
import {
  ChevronRight,
  BarChart3,
  FileText,
  TrendingUp,
  Database,
  Users,
  Download,
  Building2,
  UserCircle,
  ArrowLeft,
  Activity,
  Search,
  Menu
} from "lucide-react";

// Data structure for navigation based on actual content
const dashboardData = {
  "market-data": {
    title: "Market Data",
    subtitle: "(Real-time & Snapshots)",
    icon: BarChart3,
    color: "bg-blue-600",
    subCategories: [
      {
        id: "equity",
        title: "Equity",
        icon: TrendingUp,
        items: [
          "Pre-open",
          "Special Pre Open",
          "SPOS Cancelled Orders",
          "Equity Market Watch",
          "Illiquid Securities - Market Watch",
          "Gainers / Losers",
          "Advances / Declines",
          "Spurt in Volume",
          "Top Turnover",
          "Circuit Summary",
          "Upper Circuit : A Group",
          "52 Weeks High / Low",
          "Industry Watch :",
          "Trading Summary",
          "Value at Risk (VaR) Margin & Extreme Loss Margin (ELM)"
        ]
      },
      {
        id: "indices",
        title: "Indices",
        icon: Activity,
        items: [
          "Index Watch",
          "Index View",
          "About Index",
          "Sectorwise Market Capitalisation",
          "Index Constituents",
          "Index Contribution"
        ]
      },
      {
        id: "equity-derivatives",
        title: "Equity Derivatives",
        icon: TrendingUp,
        items: [
          "Derivative Streamer - Pre open",
          "Derivatives Watch",
          "Derivatives Chain",
          "Option Chain",
          "Market Summary"
        ]
      },
      {
        id: "currency-derivatives",
        title: "Currency Derivatives",
        icon: Database,
        items: ["Option Chain", "Most Active", "Market Summary"]
      },
      {
        id: "commodity-derivatives",
        title: "Commodity Derivatives",
        icon: TrendingUp,
        items: ["Option Chain"]
      },
      {
        id: "debt",
        title: "Debt",
        icon: FileText,
        items: [
          "Corporate Bond Reported on NDS-RST",
          "OTC Trades",
          "BUY-BACK IN CORPORATE BONDS",
          "RFQ Market Watch",
          "RFQ Trades in Corporate Bonds",
          "G-sec Reported on NDS-RST Platform",
          "Retail Trading in Corporate Debt",
          "Retail Debt Segment in Government Bonds"
        ]
      }
    ]
  },
  "corporate-disclosures": {
    title: "Corporate Disclosures & Filings",
    subtitle: "",
    icon: FileText,
    color: "bg-purple-600",
    subCategories: [
      {
        id: "corporate-filings",
        title: "Corporate Filings",
        icon: FileText,
        items: [
          "Corporate announcements",
          "Financial Results",
          "Corporate actions",
          "SHp",
          "Board Meetings",
          "Shareholders Meetings",
          "Voting Results",
          "Corporate Governance"
        ]
      },
      {
        id: "corporate-disclosures",
        title: "Corporate Disclosures",
        icon: Building2,
        items: [
          "Insider Trading & SAST",
          "Disclosures under SEBI (Prohibition of Insider Trading) Regulations, 2015 ([Regulation 7 (2) read with Regulation 6(2)]",
          "Disclosures under SEBI (Substantial Acquisition of Shares and Takeovers) Regulations, 2011",
          "Disclosures - SAST (Pledge)",
          "Format for disclosure of reasons for encumbrance - SAST (Pledge)",
          "Disclosure under Regulation 30(1) and 30(2) of SEBI (Substantial Acquisition of Shares and Takeovers) Regulations, 2011",
          "Consolidated - Pledge data",
          "PIT Trading Plan",
          "Insider Trading 2015- System Driven Disclosure",
          "SAST - System Driven Disclosure",
          "Pledge- System Driven Disclosure",
          "SAST - System Driven Disclosure",
          "System Driven Disclosures- Phase III"
        ]
      }
    ]
  },
  "primary-market": {
    title: "Primary Market",
    subtitle: "",
    icon: TrendingUp,
    color: "bg-green-600",
    subCategories: [
      {
        id: "public-issues",
        title: "Public Issues",
        icon: TrendingUp,
        items: ["Live Public Issues", "Ipo Status", "OFS", "OTB", "SGB"]
      }
    ]
  },
  "historical-data": {
    title: "Historical & Analytical Data",
    subtitle: "(Retrievable)",
    icon: Database,
    color: "bg-orange-600",
    subCategories: [
      {
        id: "historical-data",
        title: "Historical Data",
        icon: Database,
        items: [
          "Historical Stock Prices",
          "Index History",
          "Indices and Ratios",
          "Data Archives",
          "Bhav Copy"
        ]
      }
    ]
  },
  "institutional-activity": {
    title: "Institutional & Participant Activity",
    subtitle: "",
    icon: Users,
    color: "bg-indigo-600",
    subCategories: [
      {
        id: "equity",
        title: "Equity",
        icon: TrendingUp,
        items: [
          "Investor Categorywise Turnover",
          "Bulk Deals",
          "Block Deals",
          "Short Sell",
          "Margin Trading",
          "SLB Market Watch",
          "FII / FPI Trade Summary"
        ]
      },
      {
        id: "derivatives",
        title: "Derivatives",
        icon: Activity,
        items: ["Investor Categorywise Turnover"]
      }
    ]
  },
  downloads: {
    title: "Downloads",
    subtitle: "",
    icon: Download,
    color: "bg-teal-600",
    subCategories: [
      {
        id: "exchange-communication",
        title: "Exchange Communication",
        icon: FileText,
        items: ["Circulars", "Surveillance Actions", "Media Releases"]
      }
    ]
  },
  "trading-members": {
    title: "Trading Members",
    subtitle: "",
    icon: Building2,
    color: "bg-red-600",
    subCategories: [
      {
        id: "members-quick-access",
        title: "Members Quick Access",
        icon: Users,
        items: [
          "Members Helpdesk",
          "Master Circulars",
          "Downloads",
          "Circulars",
          "Surveillnce Measures",
          "Know Your Broker"
        ]
      },
      {
        id: "calendars",
        title: "Calendars",
        icon: Activity,
        items: [
          "Holidays",
          "Trading Holidays",
          "Compliance Calendar",
          "Settlement Calendar"
        ]
      }
    ]
  },
  investors: {
    title: "Investors",
    subtitle: "",
    icon: UserCircle,
    color: "bg-pink-600",
    subCategories: [
      {
        id: "investor-services",
        title: "Investor Services",
        icon: Users,
        items: [
          "Trade Check",
          "Status of Issue Application",
          "Trade Alerts",
          "Historial Annual Reports",
          "Investor Awareness Programs",
          "Academic Paper"
        ]
      },
      {
        id: "investor-guide",
        title: "Investor Guide",
        icon: FileText,
        items: [
          "Guide for Investors",
          "Rights and Obligations of Investors",
          "SEBI Circulars for Investors",
          "Authorized Mobile Apps by TM",
          "Social Media Handles by TM"
        ]
      },
      {
        id: "investor-complaints",
        title: "Investor Complaints",
        icon: Activity,
        items: [
          "Complaint / Arbitration Status",
          "Status of Complaint against Trading Member",
          "e-Complaint Registration",
          "Complaint against Trading Members",
          "Complaint against Companies",
          "Complaint against Exchange",
          "Online Dispute Resolution"
        ]
      }
    ]
  }
};

export default function Prototype1Cards() {
  const [currentView, setCurrentView] = useState<"main" | string>("main");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleCategoryClick = (categoryId: string) => {
    setSelectedCategory(categoryId);
    setCurrentView("sub");
  };

  const handleBackToMain = () => {
    setCurrentView("main");
    setSelectedCategory(null);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <img src={image_header_img_5} />
        <div className="text-white text-center py-3 px-4 bg-[#243166]">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">
            Simplifying Access Across BSEIndia
          </h1>
          <p className="text-lg md:text-xl font-normal">
            Delivering a consistent and intuitive experience for Market
            Participants & Stakeholders
          </p>
        </div>
        <img src={image_Sensex_data_4} />
      </header>

      {/* Main Content */}
      <main className="flex-1 container mx-auto px-6 py-8">
        {currentView !== "main" && (
          <button
            onClick={handleBackToMain}
            className="flex items-center gap-2 bg-white text-red-600 hover:text-red-800 px-5 py-3 rounded-xl shadow-md hover:shadow-lg mb-8 transition-all border border-red-200 hover:border-red-400 font-medium"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Main Dashboard</span>
          </button>
        )}

        {currentView === "main" ? (
          <>
            {/* <div className="mb-10 text-center">
              <h2 className="text-4xl font-bold text-gray-800 mb-3">Market Information Dashboard</h2>
              <p className="text-gray-600 text-lg">Select a category to explore comprehensive market data and services</p>
              <div className="h-1 w-24 bg-red-600 mx-auto mt-4 rounded-full"></div>
            </div> */}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {Object.entries(dashboardData).map(([key, category]) => {
                const Icon = category.icon;
                return (
                  <button
                    key={key}
                    onClick={() => handleCategoryClick(key)}
                    className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 hover:scale-105 hover:border-red-400"
                  >
                    <div
                      className={`${category.color} p-8 text-white relative overflow-hidden min-h-[180px] flex flex-col justify-center`}
                    >
                      <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full -mr-16 -mt-16"></div>
                      <Icon className="w-12 h-12 mb-3 relative z-10" />
                      <h3 className="text-base font-bold leading-tight relative z-10">
                        {category.title}
                      </h3>
                      {category.subtitle && (
                        <p className="text-xs mt-1 opacity-90 relative z-10">
                          {category.subtitle}
                        </p>
                      )}
                    </div>
                    <div className="p-4 bg-gradient-to-b from-white to-gray-50">
                      <div className="flex items-center justify-between text-gray-700">
                        <span className="text-sm font-medium">
                          {category.subCategories.length}{" "}
                          {category.subCategories.length === 1
                            ? "category"
                            : "categories"}
                        </span>
                        <ChevronRight className="w-5 h-5 group-hover:translate-x-2 transition-transform text-[#243166]" />
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </>
        ) : (
          <>
            {selectedCategory &&
              dashboardData[selectedCategory as keyof typeof dashboardData] && (
                <>
                  <div className="mb-10">
                    <div className="flex items-center gap-4 mb-4">
                      <div
                        className={`${dashboardData[selectedCategory as keyof typeof dashboardData].color} p-4 rounded-2xl shadow-lg`}
                      >
                        {(() => {
                          const Icon =
                            dashboardData[
                              selectedCategory as keyof typeof dashboardData
                            ].icon;
                          return <Icon className="w-10 h-10 text-white" />;
                        })()}
                      </div>
                      <div>
                        <h2 className="text-4xl font-bold text-gray-800">
                          {
                            dashboardData[
                              selectedCategory as keyof typeof dashboardData
                            ].title
                          }
                        </h2>
                        <p className="text-gray-600 mt-1">
                          Browse categories and access detailed information
                        </p>
                      </div>
                    </div>
                    <div className="h-1 w-32 bg-[#243166] rounded-full"></div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {dashboardData[
                      selectedCategory as keyof typeof dashboardData
                    ].subCategories.map((subCat) => {
                      const SubIcon = subCat.icon;
                      return (
                        <div
                          key={subCat.id}
                          className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 overflow-hidden group hover:border-red-300"
                        >
                          <div
                            className={`${dashboardData[selectedCategory as keyof typeof dashboardData].color} bg-opacity-10 p-6 border-b-4 ${dashboardData[selectedCategory as keyof typeof dashboardData].color.replace("bg-", "border-")}`}
                          >
                            <div className="flex items-center gap-3">
                              <div
                                className={`${dashboardData[selectedCategory as keyof typeof dashboardData].color} p-3 rounded-xl shadow-md`}
                              >
                                <SubIcon className="w-7 h-7 text-white" />
                              </div>
                              <h3 className="text-xl font-bold text-gray-800">
                                {subCat.title}
                              </h3>
                            </div>
                          </div>
                          <div className="p-6 bg-white">
                            <div className="max-h-96 overflow-y-auto">
                              <ul className="space-y-2">
                                {subCat.items.map((item, index) => (
                                  <li
                                    key={index}
                                    className="flex items-start gap-3 text-gray-700 hover:text-[#243166] transition-colors cursor-pointer group/item py-2 px-3 rounded-lg hover:bg-red-50"
                                  >
                                    <ChevronRight className="w-4 h-4 text-gray-400 group-hover/item:text-[#243166] group-hover/item:translate-x-1 transition-all mt-0.5 flex-shrink-0" />
                                    <span className="text-sm leading-relaxed">
                                      {item}
                                    </span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div className="mt-4 pt-4 border-t border-gray-100">
                              <p className="text-xs text-gray-500 text-center">
                                {subCat.items.length} items available
                              </p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </>
              )}
          </>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-blue-900 to-blue-950 text-white mt-4">
        <img src={image_footer_img_3} />
      </footer>
    </div>
  );
}
