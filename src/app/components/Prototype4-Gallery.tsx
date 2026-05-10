import image_header_img_1 from '@/imports/header-img-1.png'
import image_Sensex_data from '@/imports/Sensex-data.png'
import image_footer_img from '@/imports/footer-img.png'
import { useState } from 'react';
import { ChevronRight, BarChart3, FileText, TrendingUp, Database, Users, Download, Building2, UserCircle, ArrowLeft, Activity, ExternalLink } from 'lucide-react';

// Same data structure
const dashboardData = {
  'market-data': {
    title: 'Market Data',
    subtitle: '(Real-time & Snapshots)',
    icon: BarChart3,
    color: 'bg-blue-600',
    gradient: 'from-blue-500 to-blue-700',
    subCategories: [
      { id: 'equity', title: 'Equity', icon: TrendingUp, items: ['Pre-open', 'Special Pre Open', 'SPOS Cancelled Orders', 'Equity Market Watch', 'Illiquid Securities - Market Watch', 'Gainers / Losers', 'Advances / Declines', 'Spurt in Volume', 'Top Turnover', 'Circuit Summary', 'Upper Circuit : A Group', '52 Weeks High / Low', 'Industry Watch :', 'Trading Summary', 'Value at Risk (VaR) Margin & Extreme Loss Margin (ELM)'] },
      { id: 'indices', title: 'Indices', icon: Activity, items: ['Index Watch', 'Index View', 'About Index', 'Sectorwise Market Capitalisation', 'Index Constituents', 'Index Contribution'] },
      { id: 'equity-derivatives', title: 'Equity Derivatives', icon: TrendingUp, items: ['Derivative Streamer - Pre open', 'Derivatives Watch', 'Derivatives Chain', 'Option Chain', 'Market Summary'] },
      { id: 'currency-derivatives', title: 'Currency Derivatives', icon: Database, items: ['Option Chain', 'Most Active', 'Market Summary'] },
      { id: 'commodity-derivatives', title: 'Commodity Derivatives', icon: TrendingUp, items: ['Option Chain'] },
      { id: 'debt', title: 'Debt', icon: FileText, items: ['Corporate Bond Reported on NDS-RST', 'OTC Trades', 'BUY-BACK IN CORPORATE BONDS', 'RFQ Market Watch', 'RFQ Trades in Corporate Bonds', 'G-sec Reported on NDS-RST Platform', 'Retail Trading in Corporate Debt', 'Retail Debt Segment in Government Bonds'] }
    ]
  },
  'corporate-disclosures': {
    title: 'Corporate Disclosures & Filings',
    subtitle: '',
    icon: FileText,
    color: 'bg-purple-600',
    gradient: 'from-purple-500 to-purple-700',
    subCategories: [
      { id: 'corporate-filings', title: 'Corporate Filings', icon: FileText, items: ['Corporate announcements', 'Financial Results', 'Corporate actions', 'SHp', 'Board Meetings', 'Shareholders Meetings', 'Voting Results', 'Corporate Governance'] },
      { id: 'corporate-disclosures', title: 'Corporate Disclosures', icon: Building2, items: ['Insider Trading & SAST', 'Disclosures under SEBI (Prohibition of Insider Trading) Regulations, 2015 ([Regulation 7 (2) read with Regulation 6(2)]', 'Disclosures under SEBI (Substantial Acquisition of Shares and Takeovers) Regulations, 2011', 'Disclosures - SAST (Pledge)', 'Format for disclosure of reasons for encumbrance - SAST (Pledge)', 'Disclosure under Regulation 30(1) and 30(2) of SEBI (Substantial Acquisition of Shares and Takeovers) Regulations, 2011', 'Consolidated - Pledge data', 'PIT Trading Plan', 'Insider Trading 2015- System Driven Disclosure', 'SAST - System Driven Disclosure', 'Pledge- System Driven Disclosure', 'SAST - System Driven Disclosure', 'System Driven Disclosures- Phase III'] }
    ]
  },
  'primary-market': {
    title: 'Primary Market',
    subtitle: '',
    icon: TrendingUp,
    color: 'bg-green-600',
    gradient: 'from-green-500 to-green-700',
    subCategories: [
      { id: 'public-issues', title: 'Public Issues', icon: TrendingUp, items: ['Live Public Issues', 'Ipo Status', 'OFS', 'OTB', 'SGB'] }
    ]
  },
  'historical-data': {
    title: 'Historical & Analytical Data',
    subtitle: '(Retrievable)',
    icon: Database,
    color: 'bg-orange-600',
    gradient: 'from-orange-500 to-orange-700',
    subCategories: [
      { id: 'historical-data', title: 'Historical Data', icon: Database, items: ['Historical Stock Prices', 'Index History', 'Indices and Ratios', 'Data Archives', 'Bhav Copy'] }
    ]
  },
  'institutional-activity': {
    title: 'Institutional & Participant Activity',
    subtitle: '',
    icon: Users,
    color: 'bg-indigo-600',
    gradient: 'from-indigo-500 to-indigo-700',
    subCategories: [
      { id: 'equity', title: 'Equity', icon: TrendingUp, items: ['Investor Categorywise Turnover', 'Bulk Deals', 'Block Deals', 'Short Sell', 'Margin Trading', 'SLB Market Watch', 'FII / FPI Trade Summary'] },
      { id: 'derivatives', title: 'Derivatives', icon: Activity, items: ['Investor Categorywise Turnover'] }
    ]
  },
  'downloads': {
    title: 'Downloads',
    subtitle: '',
    icon: Download,
    color: 'bg-teal-600',
    gradient: 'from-teal-500 to-teal-700',
    subCategories: [
      { id: 'exchange-communication', title: 'Exchange Communication', icon: FileText, items: ['Circulars', 'Surveillance Actions', 'Media Releases'] }
    ]
  },
  'trading-members': {
    title: 'Trading Members',
    subtitle: '',
    icon: Building2,
    color: 'bg-red-600',
    gradient: 'from-red-500 to-red-700',
    subCategories: [
      { id: 'members-quick-access', title: 'Members Quick Access', icon: Users, items: ['Members Helpdesk', 'Master Circulars', 'Downloads', 'Circulars', 'Surveillnce Measures', 'Know Your Broker'] },
      { id: 'calendars', title: 'Calendars', icon: Activity, items: ['Holidays', 'Trading Holidays', 'Compliance Calendar', 'Settlement Calendar'] }
    ]
  },
  'investors': {
    title: 'Investors',
    subtitle: '',
    icon: UserCircle,
    color: 'bg-pink-600',
    gradient: 'from-pink-500 to-pink-700',
    subCategories: [
      { id: 'investor-services', title: 'Investor Services', icon: Users, items: ['Trade Check', 'Status of Issue Application', 'Trade Alerts', 'Historial Annual Reports', 'Investor Awareness Programs', 'Academic Paper'] },
      { id: 'investor-guide', title: 'Investor Guide', icon: FileText, items: ['Guide for Investors', 'Rights and Obligations of Investors', 'SEBI Circulars for Investors', 'Authorized Mobile Apps by TM', 'Social Media Handles by TM'] },
      { id: 'investor-complaints', title: 'Investor Complaints', icon: Activity, items: ['Complaint / Arbitration Status', 'Status of Complaint against Trading Member', 'e-Complaint Registration', 'Complaint against Trading Members', 'Complaint against Companies', 'Complaint against Exchange', 'Online Dispute Resolution'] }
    ]
  }
};

export default function Prototype4Gallery() {
  const [currentView, setCurrentView] = useState<'main' | string>('main');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleCategoryClick = (categoryId: string) => {
    setSelectedCategory(categoryId);
    setCurrentView('sub');
  };

  const handleBackToMain = () => {
    setCurrentView('main');
    setSelectedCategory(null);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <img src={image_header_img_1} alt="BSE Header" className="w-full" />
        <div className="text-white text-center py-3 px-4 bg-[#243166]">
          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2">
            Simplifying Access Across BSEIndia
          </h1>
          <p className="text-sm md:text-lg lg:text-xl font-normal">
            Delivering a consistent and intuitive experience for Market Participants & Stakeholders
          </p>
        </div>
        <img src={image_Sensex_data} alt="Market Data" className="w-full" />
      </header>

      {/* Main Content */}
      <main className="flex-1 container mx-auto px-6 py-8">
        {currentView !== 'main' && (
          <button
            onClick={handleBackToMain}
            className="flex items-center gap-2 bg-white text-[#243166] hover:bg-gray-50 px-6 py-3 rounded-xl shadow-md hover:shadow-lg mb-8 transition-all border border-gray-200 font-semibold"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Dashboard</span>
          </button>
        )}

        {currentView === 'main' ? (
          <>
            <div className="mb-10 text-center">
              <h2 className="text-4xl font-bold text-gray-800 mb-3">Market Information Gallery</h2>
              <p className="text-gray-600 text-lg">Browse through our comprehensive data categories</p>
              <div className="h-1 w-24 bg-[#243166] mx-auto mt-4 rounded-full"></div>
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {Object.entries(dashboardData).map(([key, category]) => {
                const Icon = category.icon;
                return (
                  <button
                    key={key}
                    onClick={() => handleCategoryClick(key)}
                    className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border-2 border-gray-100 hover:border-[#243166] transform hover:-translate-y-2"
                  >
                    {/* Gradient Background */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

                    {/* Icon Section */}
                    <div className="relative p-8 flex flex-col items-center justify-center min-h-[240px]">
                      <div className={`${category.color} p-6 rounded-3xl shadow-xl mb-4 group-hover:scale-110 transition-transform duration-500`}>
                        <Icon className="w-12 h-12 text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-gray-800 text-center leading-tight mb-2">
                        {category.title}
                      </h3>
                      {category.subtitle && (
                        <p className="text-xs text-gray-500 text-center">{category.subtitle}</p>
                      )}

                      {/* Stats Badge */}
                      <div className="absolute top-4 right-4 bg-[#243166] text-white text-xs font-bold px-3 py-1 rounded-full">
                        {category.subCategories.length}
                      </div>

                      {/* Hover Arrow */}
                      <div className="mt-4 flex items-center gap-2 text-[#243166] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="text-sm font-semibold">Explore</span>
                        <ExternalLink className="w-4 h-4" />
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </>
        ) : (
          <>
            {selectedCategory && dashboardData[selectedCategory as keyof typeof dashboardData] && (
              <>
                <div className="mb-10">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`bg-gradient-to-br ${dashboardData[selectedCategory as keyof typeof dashboardData].gradient} p-5 rounded-3xl shadow-xl`}>
                      {(() => {
                        const Icon = dashboardData[selectedCategory as keyof typeof dashboardData].icon;
                        return <Icon className="w-12 h-12 text-white" />;
                      })()}
                    </div>
                    <div>
                      <h2 className="text-4xl font-bold text-gray-800">
                        {dashboardData[selectedCategory as keyof typeof dashboardData].title}
                      </h2>
                      {dashboardData[selectedCategory as keyof typeof dashboardData].subtitle && (
                        <p className="text-gray-600 mt-1">{dashboardData[selectedCategory as keyof typeof dashboardData].subtitle}</p>
                      )}
                    </div>
                  </div>
                  <div className="h-1 w-32 bg-[#243166] rounded-full"></div>
                </div>

                {/* Sub-Categories - Two Column Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {dashboardData[selectedCategory as keyof typeof dashboardData].subCategories.map((subCat) => {
                    const SubIcon = subCat.icon;
                    return (
                      <div
                        key={subCat.id}
                        className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-gray-100 overflow-hidden group"
                      >
                        <div className={`bg-gradient-to-r ${dashboardData[selectedCategory as keyof typeof dashboardData].gradient} p-5`}>
                          <div className="flex items-center gap-3 text-white">
                            <SubIcon className="w-7 h-7" />
                            <div>
                              <h3 className="text-xl font-bold">{subCat.title}</h3>
                              <p className="text-xs opacity-90 mt-1">{subCat.items.length} items</p>
                            </div>
                          </div>
                        </div>
                        <div className="p-5 bg-white max-h-[400px] overflow-y-auto">
                          <ul className="space-y-1">
                            {subCat.items.map((item, index) => (
                              <li
                                key={index}
                                className="flex items-start gap-2 text-gray-700 hover:text-[#243166] transition-colors cursor-pointer py-2 px-3 rounded-lg hover:bg-blue-50 group/item"
                              >
                                <ChevronRight className="w-4 h-4 text-gray-400 group-hover/item:text-[#243166] group-hover/item:translate-x-1 transition-all mt-0.5 flex-shrink-0" />
                                <span className="text-sm leading-relaxed">{item}</span>
                              </li>
                            ))}
                          </ul>
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
      <footer className="mt-16">
        <img src={image_footer_img} alt="BSE Footer" className="w-full" />
      </footer>
    </div>
  );
}
