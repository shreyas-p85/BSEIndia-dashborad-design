import image_header_img_2 from '@/imports/header-img-2.png'
import image_Sensex_data_1 from '@/imports/Sensex-data-1.png'
import image_footer_img_2 from '@/imports/footer-img-2.png'
import { useState } from 'react';
import { ChevronRight, BarChart3, FileText, TrendingUp, Database, Users, Download, Building2, UserCircle, Activity, ChevronDown, List } from 'lucide-react';

// Same data structure
const dashboardData = {
  'market-data': {
    title: 'Market Data',
    subtitle: '(Real-time & Snapshots)',
    icon: BarChart3,
    color: 'bg-blue-600',
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
    subCategories: [
      { id: 'public-issues', title: 'Public Issues', icon: TrendingUp, items: ['Live Public Issues', 'Ipo Status', 'OFS', 'OTB', 'SGB'] }
    ]
  },
  'historical-data': {
    title: 'Historical & Analytical Data',
    subtitle: '(Retrievable)',
    icon: Database,
    color: 'bg-orange-600',
    subCategories: [
      { id: 'historical-data', title: 'Historical Data', icon: Database, items: ['Historical Stock Prices', 'Index History', 'Indices and Ratios', 'Data Archives', 'Bhav Copy'] }
    ]
  },
  'institutional-activity': {
    title: 'Institutional & Participant Activity',
    subtitle: '',
    icon: Users,
    color: 'bg-indigo-600',
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
    subCategories: [
      { id: 'exchange-communication', title: 'Exchange Communication', icon: FileText, items: ['Circulars', 'Surveillance Actions', 'Media Releases'] }
    ]
  },
  'trading-members': {
    title: 'Trading Members',
    subtitle: '',
    icon: Building2,
    color: 'bg-red-600',
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
    subCategories: [
      { id: 'investor-services', title: 'Investor Services', icon: Users, items: ['Trade Check', 'Status of Issue Application', 'Trade Alerts', 'Historial Annual Reports', 'Investor Awareness Programs', 'Academic Paper'] },
      { id: 'investor-guide', title: 'Investor Guide', icon: FileText, items: ['Guide for Investors', 'Rights and Obligations of Investors', 'SEBI Circulars for Investors', 'Authorized Mobile Apps by TM', 'Social Media Handles by TM'] },
      { id: 'investor-complaints', title: 'Investor Complaints', icon: Activity, items: ['Complaint / Arbitration Status', 'Status of Complaint against Trading Member', 'e-Complaint Registration', 'Complaint against Trading Members', 'Complaint against Companies', 'Complaint against Exchange', 'Online Dispute Resolution'] }
    ]
  }
};

export default function Prototype5ListView() {
  const [expandedCategory, setExpandedCategory] = useState<string | null>('market-data');
  const [expandedSubCat, setExpandedSubCat] = useState<string | null>(null);

  const toggleCategory = (categoryId: string) => {
    setExpandedCategory(expandedCategory === categoryId ? null : categoryId);
    setExpandedSubCat(null);
  };

  const toggleSubCategory = (subCatId: string) => {
    setExpandedSubCat(expandedSubCat === subCatId ? null : subCatId);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <img src={image_header_img_2} alt="BSE Header" className="w-full" />
        <div className="text-white text-center py-3 px-4 bg-[#243166]">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">
            Simplifying Access Across BSEIndia
          </h1>
          <p className="text-lg md:text-xl font-normal">
            Delivering a consistent and intuitive experience for Market Participants & Stakeholders
          </p>
        </div>
        <img src={image_Sensex_data_1} alt="Market Data" className="w-full" />
      </header>

      {/* Main Content */}
      <main className="flex-1 container mx-auto px-6 py-8">
        <div className="mb-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-3">
            <List className="w-8 h-8 text-[#243166]" />
            <h2 className="text-4xl font-bold text-gray-800">Comprehensive List View</h2>
          </div>
          <p className="text-gray-600 text-lg">Expand categories to view detailed information</p>
          <div className="h-1 w-24 bg-[#243166] mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Expandable List */}
        <div className="max-w-5xl mx-auto space-y-3">
          {Object.entries(dashboardData).map(([key, category]) => {
            const Icon = category.icon;
            const isExpanded = expandedCategory === key;
            return (
              <div key={key} className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
                {/* Category Header */}
                <button
                  onClick={() => toggleCategory(key)}
                  className="w-full flex items-center justify-between p-5 hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className={`${category.color} p-3 rounded-lg`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-left">
                      <h3 className="text-xl font-bold text-gray-800">{category.title}</h3>
                      {category.subtitle && (
                        <p className="text-sm text-gray-500 mt-1">{category.subtitle}</p>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-gray-500 font-medium">
                      {category.subCategories.length} {category.subCategories.length === 1 ? 'category' : 'categories'}
                    </span>
                    <ChevronDown
                      className={`w-6 h-6 text-gray-400 transition-transform ${
                        isExpanded ? 'rotate-180' : ''
                      }`}
                    />
                  </div>
                </button>

                {/* Sub-Categories */}
                {isExpanded && (
                  <div className="border-t border-gray-200 bg-gray-50">
                    {category.subCategories.map((subCat) => {
                      const SubIcon = subCat.icon;
                      const isSubExpanded = expandedSubCat === subCat.id;
                      return (
                        <div key={subCat.id} className="border-b border-gray-200 last:border-b-0">
                          <button
                            onClick={() => toggleSubCategory(subCat.id)}
                            className="w-full flex items-center justify-between p-4 pl-20 hover:bg-white transition-colors"
                          >
                            <div className="flex items-center gap-3">
                              <SubIcon className="w-5 h-5 text-[#243166]" />
                              <span className="font-semibold text-gray-700">{subCat.title}</span>
                            </div>
                            <div className="flex items-center gap-3">
                              <span className="text-xs text-gray-500 bg-gray-200 px-2 py-1 rounded-full">
                                {subCat.items.length} items
                              </span>
                              <ChevronDown
                                className={`w-5 h-5 text-gray-400 transition-transform ${
                                  isSubExpanded ? 'rotate-180' : ''
                                }`}
                              />
                            </div>
                          </button>

                          {/* Items List */}
                          {isSubExpanded && (
                            <div className="bg-white p-4 pl-24">
                              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                {subCat.items.map((item, index) => (
                                  <li
                                    key={index}
                                    className="flex items-start gap-2 text-gray-700 hover:text-[#243166] transition-colors cursor-pointer py-2 px-3 rounded-lg hover:bg-blue-50 group"
                                  >
                                    <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-[#243166] group-hover:translate-x-1 transition-all mt-0.5 flex-shrink-0" />
                                    <span className="text-sm">{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-16">
        <img src={image_footer_img_2} alt="BSE Footer" className="w-full" />
      </footer>
    </div>
  );
}
