import React, { useState } from "react";
import {
  LayoutDashboard,
  Users,
  Contact,
  Building2,
  Handshake,
  LineChart,
  LifeBuoy,
  CreditCard,
  Rocket,
  AlertTriangle,
  FileText,
  CheckSquare,
  CalendarDays,
  Settings,
  FolderOpen,
  Bell,
  Search,
  Plus,
  MoreHorizontal,
  Mail,
  Phone,
  Clock,
  ChevronLeft,
  ChevronRight,
  Filter,
  Briefcase,
  Swords,
  ListChecks,
  UserCog,
  Database,
  ArrowLeftRight,
  LogOut,
  Home,
  PanelLeftClose,
  Calendar,
  X,
  ChevronDown,
  MessageSquare,
  ArrowRight
} from "lucide-react";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Separator } from "@/components/ui/separator";

const contactsNav = [
  { name: "Accounts", icon: Building2, count: 15 },
  { name: "Contacts", icon: Contact, count: 13 },
  { name: "Leads", icon: Users, count: 5 },
  { name: "Partners", icon: Handshake, count: 5 },
  { name: "Competitors", icon: Swords, count: 4 },
];

const itemsNav = [
  { name: "Opportunities", icon: LineChart, count: 14 },
  { name: "Support Cases", icon: LifeBuoy, count: 7 },
  { name: "Subscriptions", icon: CreditCard, count: 9 },
  { name: "Onboardings", icon: Rocket, count: 1 },
  { name: "Escalations", icon: AlertTriangle, count: 2 },
  { name: "Quotes", icon: FileText, count: 3 },
  { name: "Tasks", icon: CheckSquare, count: 11 },
  { name: "Appointments", icon: CalendarDays, count: 9 },
];

const interactionsNav = [
  { name: "All", icon: ListChecks, count: 15 },
];

const configNav = [
  { name: "Users", icon: Users },
  { name: "My Account", icon: UserCog },
  { name: "View Schema", icon: Database },
  { name: "Import / Export", icon: ArrowLeftRight },
];

const dueItems = [
  { id: 1, type: "Support Case", icon: LifeBuoy, title: "Apex Financial — RingSense dashboard latency", deadline: "SLA deadline: Mar 18, 3:00 PM", status: "OVERDUE" },
  { id: 2, type: "Escalation", icon: AlertTriangle, title: "ESCL-2198: Premier Dental routing logic", deadline: "Resolution ETA: Mar 22, 2026", status: "OVERDUE" },
  { id: 3, type: "Support Case", icon: LifeBuoy, title: "Pinnacle Retail — Store call drops (4 locations)", deadline: "SLA deadline: Mar 21, 3:00 PM", status: "OVERDUE" },
  { id: 4, type: "Task", icon: CheckSquare, title: "Send Pinnacle Retail network assessment report", deadline: "Due: Mar 28, 3:00 PM", status: "DUE TODAY" },
  { id: 5, type: "Task", icon: CheckSquare, title: "Prepare Premier Dental remediation plan", deadline: "Due: Mar 28, 5:00 PM", status: "DUE TODAY" },
  { id: 6, type: "Support Case", icon: LifeBuoy, title: "Summit Legal — Call recording not syncing", deadline: "SLA deadline: Mar 29, 10:00 AM", status: "DUE SOON" },
  { id: 7, type: "Task", icon: CheckSquare, title: "Call Patricia Gomez — pitch intake CCaaS", deadline: "Due: Mar 29, 12:00 PM", status: "DUE SOON" },
  { id: 8, type: "Task", icon: CheckSquare, title: "Schedule Salesforce integration demo for H...", deadline: "Due: Mar 30, 10:00 AM", status: "UPCOMING" },
  { id: 9, type: "Support Case", icon: LifeBuoy, title: "NovaCare — Patient callback feature request", deadline: "SLA deadline: Mar 30, 3:00 PM", status: "UPCOMING" },
  { id: 10, type: "Support Case", icon: LifeBuoy, title: "Greenfield PM — After-hours voicemail routing", deadline: "Due: Mar 31, 3:00 PM", status: "UPCOMING" },
  { id: 11, type: "Task", icon: CheckSquare, title: "Send co-marketing proposal to Mike Davis (...)", deadline: "Due: Apr 1, 10:00 AM", status: "UPCOMING" },
  { id: 12, type: "Support Case", icon: LifeBuoy, title: "Premier Dental — Multi-office call routing", deadline: "SLA deadline: Apr 1, 10:00 AM", status: "UPCOMING" },
  { id: 13, type: "Task", icon: CheckSquare, title: "Send revised proposal to Meridian Health", deadline: "Due: Apr 2, 3:00 PM", status: "UPCOMING" },
  { id: 14, type: "Support Case", icon: LifeBuoy, title: "Pacific Hospitality — Conference room phone", deadline: "SLA deadline: Apr 3, 3:00 PM", status: "UPCOMING" },
  { id: 15, type: "Escalation", icon: AlertTriangle, title: "ESCL-2201: Pinnacle Retail store call drop", deadline: "Resolution ETA: Apr 5, 2026", status: "UPCOMING" },
  { id: 16, type: "Task", icon: CheckSquare, title: "Complete BrightWave Health RFP response", deadline: "Due: Apr 7, 3:00 PM", status: "UPCOMING" },
];

const calendarEvents = [
  { id: 1, time: "8:00 AM - 9:30 AM", title: "Demo — Bright Horizons vs Zoom Phone", subtitle: "Bright Horizons Education · Scheduled", topOffset: 14, height: 12 },
];

const pipelineData = [
  {
    name: "Opportunity Pipeline",
    count: 14,
    color: "bg-blue-500",
    headerBg: "bg-blue-50 border-blue-200",
    headerText: "text-blue-700",
    columns: [
      { title: "Prospecting", count: 6, items: [
        { name: "Union Credit...", sub: "Lost" },
        { name: "Atlas Logistic...", sub: "Lost" },
        { name: "Summit Legal...", sub: "Discovery, Closed" },
        { name: "TechVault — ...", sub: "Discovery, Closed" },
      ]},
      { title: "Discovery", count: 4, items: [
        { name: "Pacific Hospit...", sub: "Closed Lost" },
        { name: "Apex Financia...", sub: "Closed Lost" },
        { name: "Coastal Manu...", sub: "Closed Lost" },
        { name: "BrightWave H...", sub: "Solution Design" },
      ]},
      { title: "Solution Design", count: 3, items: [
        { name: "Bright Horizo...", sub: "Proposal, Closed" },
      ]},
    ]
  },
  {
    name: "Support Case Pipeline",
    count: 7,
    color: "bg-orange-500",
    headerBg: "bg-orange-50 border-orange-200",
    headerText: "text-orange-700",
    columns: [
      { title: "New", count: 1, items: [
        { name: "Pacific Hospit...", sub: "Progress" },
      ]},
      { title: "Triaged", count: 1, items: [
        { name: "NovaCare — ...", sub: "Escalated" },
      ]},
      { title: "In Progress", count: 1, items: [
        { name: "Premier Dent...", sub: "Closed" },
      ]},
    ]
  },
  {
    name: "Subscription Pipeline",
    count: 9,
    color: "bg-purple-500",
    headerBg: "bg-purple-50 border-purple-200",
    headerText: "text-purple-700",
    columns: [
      { title: "Onboarding", count: 0, items: [] },
      { title: "Active", count: 6, items: [
        { name: "TechVault — ...", sub: "Churned, Cancelled" },
        { name: "Pacific Hospi...", sub: "Churned, Cancelled" },
        { name: "Summit Legal...", sub: "Renewed, Active" },
        { name: "Pinnacle Reta...", sub: "Renewed, Pending" },
        { name: "Apex Financia...", sub: "Renewed, Pending" },
      ]},
      { title: "Renewal", count: 0, items: [] },
      { title: "Pending", count: 0, items: [] },
    ]
  },
  {
    name: "Onboarding Pipeline",
    count: 1,
    color: "bg-green-500",
    headerBg: "bg-green-50 border-green-200",
    headerText: "text-green-700",
    columns: [
      { title: "Kickoff", count: 1, items: [
        { name: "NovaCare — ...", sub: "Started" },
        { name: "Onboarding...", sub: "Started" },
      ]},
      { title: "Configuration", count: 0, items: [] },
      { title: "Training", count: 0, items: [] },
    ]
  },
  {
    name: "Escalation Pipeline",
    count: 2,
    color: "bg-red-500",
    headerBg: "bg-red-50 border-red-200",
    headerText: "text-red-700",
    columns: [
      { title: "Filed", count: 0, items: [] },
      { title: "Acknowledged", count: 0, items: [] },
      { title: "Investigating", count: 1, items: [
        { name: "ESCL-2201: Pi...", sub: "" },
      ]},
    ]
  },
];

const recentInteractions = [
  { id: 1, date: "3/20/2026", type: "email", contact: "Janet Wu", notes: "Janet Wu: pilot accepted. Needs reference call and discount terms before April 8 board meeting." },
  { id: 2, date: "3/20/2026", type: "voice", contact: "Jenny Liu", notes: "Jenny Liu: Frank excited, Helen harder sell. Must nail SF demo March 27. Factory floor visit requested." },
  { id: 3, date: "3/20/2026", type: "voice", contact: "Derek Williams", notes: "Derek Williams demanded resolution plan by 5pm. RFP threat if not fixed in 2 weeks. Weekly status calls s..." },
  { id: 4, date: "3/20/2026", type: "voice", contact: "Maria Santos", notes: "Maria Santos: CTO aware. Frame as network optimization. Willing to co-present remediation to Derek." },
  { id: 5, date: "3/19/2026", type: "voice", contact: "Carlos Reyes", notes: "Carlos Reyes: lead with wallboard demo for Atlas. Redline Auto commission split needed." },
  { id: 6, date: "3/19/2026", type: "voice", contact: "Rosa Martinez", notes: "Rosa Martinez upset. Offered free PS reconfiguration. Remediation call March 22." },
  { id: 7, date: "3/19/2026", type: "voice", contact: "Rachel Hoffman", notes: "Rachel Hoffman: Meridian migration scope — 6–8 weeks, $42k. SOW by March 24." },
  { id: 8, date: "3/19/2026", type: "voice", contact: "Mike Davis", notes: "Mike Davis: conference with Janet Wu next week. BrightWave RFP deadline March 28. Co-marketing bud..." },
  { id: 9, date: "3/18/2026", type: "voice", contact: "Greg Tanaka", notes: "Greg Tanaka: Zoom leading. Agreed to side-by-side demo March 28. Decision by mid-April." },
  { id: 10, date: "3/18/2026", type: "email", contact: "Mark Delgado", notes: "Mark Delgado wants expansion seats at current rate. Samantha wants RingSense coaching beta." },
];

const selectedInteraction = {
  title: "Mike Davis: conference with Janet Wu next week. BrightWave RFP deadline March 28. Co-marketing budget request.",
  type: "voice",
  date: "3/19/2026, 9:00:00 AM",
  fullNote: "Mike Davis: conference with Janet Wu next week. BrightWave RFP deadline March 28. Co-marketing budget request.",
  related: [
    { label: "Partner", value: "Mike Davis" },
    { label: "Opportunity", value: "Meridian Health — UCaaS + CCaaS Proposal" },
  ],
  transcript: "Mike Davis checking in on Meridian. Seeing Janet Wu at healthcare conference. BrightWave RFP deadline firm March 28. Asking about co-marketing budget."
};

const NavSection = ({ label, items, collapsed }: { label: string, items: { name: string, icon: any, count?: number }[], collapsed?: boolean }) => (
  <>
    {!collapsed ? (
      <div className="flex items-center pt-4 pb-2 px-2.5">
        <span className="text-[11px] font-medium text-[#8b8d97] uppercase tracking-[0.06em]">{label}</span>
        <div className="flex-1 h-px bg-[#e7e8ec] ml-3" />
      </div>
    ) : (
      <div className="pt-3 pb-1 px-2.5">
        <div className="h-px bg-[#e7e8ec]" />
      </div>
    )}
    <div className="space-y-px">
      {items.map((item) => (
        <button
          key={item.name}
          className={`w-full flex items-center rounded-[10px] text-[14px] font-medium text-[#323439] hover:bg-white hover:shadow-[0_1.5px_4px_0_rgba(0,0,0,0.06)] transition-all group ${
            collapsed ? "justify-center p-[7px]" : "gap-3 px-2.5 py-[7px]"
          }`}
          title={collapsed ? item.name : undefined}
        >
          <item.icon size={20} strokeWidth={1.8} className="text-[#8b8d97] opacity-80 group-hover:opacity-100 shrink-0" />
          {!collapsed && <span className="flex-1 text-left opacity-80 group-hover:opacity-100">{item.name}</span>}
          {!collapsed && item.count !== undefined && (
            <span className="text-[12px] text-[#8b8d97] tabular-nums opacity-60">{item.count}</span>
          )}
        </button>
      ))}
    </div>
  </>
);

const Sidebar = ({ collapsed, onToggle }: { collapsed: boolean, onToggle: () => void }) => (
  <aside
    className={`border-r border-[#e7e8ec] flex flex-col h-screen overflow-y-auto flex-shrink-0 p-4 gap-4 transition-all duration-300 ease-in-out ${
      collapsed ? "w-[72px] items-center" : "w-[260px]"
    }`}
    style={{ background: "linear-gradient(90deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.2) 100%), linear-gradient(90deg, #f5f6f9 0%, #f5f6f9 100%)" }}
  >
    <div className={`flex items-center h-8 ${collapsed ? "justify-center" : "justify-between"}`}>
      {!collapsed && (
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-[6px] bg-gradient-to-br from-[#ff8800] to-[#ff6600] flex items-center justify-center shadow-sm">
            <Building2 size={14} className="text-white" strokeWidth={2.2} />
          </div>
          <span className="font-bold text-[15px] text-[#161618] leading-5">Real Estate Office</span>
        </div>
      )}
      <button onClick={onToggle} className="p-2 rounded-full hover:bg-white/80 transition-colors">
        <PanelLeftClose size={16} className={`text-[#8b8d97] transition-transform duration-300 ${collapsed ? "rotate-180" : ""}`} />
      </button>
    </div>

    <div className="bg-white rounded-[10px] border border-[rgba(221,223,229,0.5)] shadow-[0_1.5px_4px_0_rgba(0,0,0,0.05)] overflow-hidden">
      {collapsed ? (
        <>
          <button className="w-full flex items-center justify-center py-2 hover:bg-[#f5f6f9] transition-colors" title="Search and actions">
            <Search size={20} className="text-[#323439] opacity-80" strokeWidth={1.8} />
          </button>
          <div className="mx-2.5 h-px bg-[#dddfe5]" />
          <button className="w-full flex items-center justify-center py-2 hover:bg-[#f5f6f9] transition-colors relative" title="Notifications">
            <Bell size={20} className="text-[#323439] opacity-80" strokeWidth={1.8} />
            <span className="absolute top-1 right-1.5 bg-[#0040dd] text-white text-[10px] font-bold min-w-[16px] h-4 flex items-center justify-center rounded-full px-1">3</span>
          </button>
        </>
      ) : (
        <>
          <div className="flex items-center px-2.5 py-2 gap-3">
            <Search size={20} className="text-[#323439] opacity-80 shrink-0" strokeWidth={1.8} />
            <span className="text-[14px] font-medium text-[#323439] opacity-80 flex-1">Search and actions</span>
            <span className="text-[14px] font-medium text-[#48494c] opacity-40">⌘K</span>
          </div>
          <div className="mx-2.5 h-px bg-[#dddfe5]" />
          <button className="w-full flex items-center gap-3 px-2.5 py-2 hover:bg-[#f5f6f9] transition-colors">
            <Bell size={20} className="text-[#323439] opacity-80 shrink-0" strokeWidth={1.8} />
            <span className="text-[14px] font-medium text-[#323439] opacity-80 flex-1 text-left">Notifications</span>
            <span className="bg-[#0040dd] text-white text-[10px] font-bold min-w-[16px] h-4 flex items-center justify-center rounded-full px-1">3</span>
          </button>
        </>
      )}
    </div>

    <div className="flex-1 overflow-y-auto -mx-1 px-1">
      <div className="space-y-px">
        <button
          className={`w-full flex items-center rounded-[10px] text-[14px] font-medium bg-white shadow-[0_1.5px_4px_0_rgba(0,0,0,0.06)] text-[#161618] border border-[rgba(221,223,229,0.3)] ${
            collapsed ? "justify-center p-[7px]" : "gap-3 px-2.5 py-[7px]"
          }`}
          title={collapsed ? "Home" : undefined}
        >
          <Home size={20} strokeWidth={1.8} className="text-[#0040dd] shrink-0" />
          {!collapsed && <span className="flex-1 text-left">Home</span>}
        </button>
      </div>

      <NavSection label="Contacts" items={contactsNav} collapsed={collapsed} />
      <NavSection label="Items" items={itemsNav} collapsed={collapsed} />
      <NavSection label="Interactions" items={interactionsNav} collapsed={collapsed} />

      {!collapsed ? (
        <div className="flex items-center pt-4 pb-2 px-2.5">
          <span className="text-[11px] font-medium text-[#8b8d97] uppercase tracking-[0.06em]">Configuration</span>
          <div className="flex-1 h-px bg-[#e7e8ec] ml-3" />
        </div>
      ) : (
        <div className="pt-3 pb-1 px-2.5">
          <div className="h-px bg-[#e7e8ec]" />
        </div>
      )}
      <div className="space-y-px">
        {configNav.map((item) => (
          <button
            key={item.name}
            className={`w-full flex items-center rounded-[10px] text-[14px] font-medium text-[#323439] hover:bg-white hover:shadow-[0_1.5px_4px_0_rgba(0,0,0,0.06)] transition-all group ${
              collapsed ? "justify-center p-[7px]" : "gap-3 px-2.5 py-[7px]"
            }`}
            title={collapsed ? item.name : undefined}
          >
            <item.icon size={20} strokeWidth={1.8} className="text-[#8b8d97] opacity-80 group-hover:opacity-100 shrink-0" />
            {!collapsed && <span className="flex-1 text-left opacity-80 group-hover:opacity-100">{item.name}</span>}
          </button>
        ))}
      </div>
    </div>

    <div className="border-t border-[#e7e8ec] pt-3 mt-1">
      {collapsed ? (
        <div className="flex flex-col items-center gap-2">
          <Avatar className="h-8 w-8 rounded-full border border-[#e7e8ec]">
            <AvatarFallback className="bg-[#e7e8ec] text-[#48494c] text-xs font-semibold">SV</AvatarFallback>
          </Avatar>
          <button className="p-1 text-[#8b8d97] hover:text-[#323439] transition-colors" title="Sign Out">
            <LogOut size={16} strokeWidth={1.8} />
          </button>
        </div>
      ) : (
        <>
          <div className="flex items-center gap-2.5 px-1">
            <Avatar className="h-8 w-8 rounded-full border border-[#e7e8ec]">
              <AvatarFallback className="bg-[#e7e8ec] text-[#48494c] text-xs font-semibold">SV</AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <p className="text-[13px] font-semibold text-[#161618] leading-tight truncate">Sergey Vlastuk</p>
              <p className="text-[11px] text-[#8b8d97] truncate">admin</p>
            </div>
          </div>
          <button className="mt-2 flex items-center gap-2 px-1 py-1 text-[12px] text-[#8b8d97] hover:text-[#323439] transition-colors">
            <LogOut size={14} strokeWidth={1.8} />
            Sign Out
          </button>
        </>
      )}
    </div>
  </aside>
);

const typeIconColor = (type: string) => {
  switch (type) {
    case "Support Case": return "text-blue-600 bg-blue-50";
    case "Task": return "text-amber-600 bg-amber-50";
    case "Escalation": return "text-red-600 bg-red-50";
    default: return "text-slate-600 bg-slate-50";
  }
};

const ScheduleCalendar = () => {
  const hours = ["7 AM", "8 AM", "9 AM", "10 AM", "11 AM", "12 PM"];
  return (
    <div className="flex flex-col h-full">
      <div className="px-4 py-3 border-b border-[#e7e8ec] flex items-center justify-between">
        <div>
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-[8px] bg-[#0040dd]/10 flex items-center justify-center">
              <Calendar size={14} className="text-[#0040dd]" />
            </div>
            <h3 className="text-[14px] font-semibold text-[#161618]">Schedule Calendar</h3>
          </div>
          <p className="text-[16px] font-bold text-[#161618] mt-1.5">Saturday, March 28</p>
          <p className="text-[11px] text-[#8b8d97]">Date picker view for the selected day's scheduled items.</p>
        </div>
        <span className="text-[10px] text-[#8b8d97] whitespace-nowrap bg-[#f0f1f4] px-2 py-1 rounded-full">8:00 AM first start</span>
      </div>
      <div className="px-3 py-2 border-b border-[#e7e8ec] flex items-center gap-2">
        <button className="h-7 px-2.5 text-[11px] font-medium text-[#48494c] bg-white border border-[#e7e8ec] rounded-[8px] hover:bg-[#f8f9fb] transition-colors">Prev</button>
        <button className="h-7 px-2.5 text-[11px] font-medium text-[#48494c] bg-white border border-[#e7e8ec] rounded-[8px] hover:bg-[#f8f9fb] transition-colors">Today</button>
        <input defaultValue="03/28/2026" className="h-7 w-28 text-[11px] text-[#323439] border border-[#e7e8ec] rounded-[8px] px-2 bg-white focus:outline-none focus:border-[#0040dd]" />
        <Calendar size={14} className="text-[#8b8d97]" />
        <button className="h-7 px-2.5 text-[11px] font-medium text-[#48494c] bg-white border border-[#e7e8ec] rounded-[8px] hover:bg-[#f8f9fb] transition-colors">Next</button>
      </div>
      <div className="flex-1 overflow-auto">
        <div className="relative">
          {hours.map((hour, idx) => (
            <div key={idx} className="flex items-start h-14 border-b border-[#f0f1f4]">
              <span className="w-16 text-right pr-3 text-[11px] text-[#8b8d97] pt-0.5 shrink-0">{hour}</span>
              <div className="flex-1 border-l border-[#e7e8ec] h-full relative">
                {hour === "8 AM" && (
                  <div className="absolute left-2 right-2 top-0 rounded-[8px] bg-[#0040dd]/[0.06] border border-[#0040dd]/20 p-2.5" style={{ height: "84px" }}>
                    <p className="text-[11px] font-bold text-[#0040dd]">8:00 AM - 9:30 AM</p>
                    <p className="text-[12px] font-semibold text-[#323439] mt-0.5">Demo — Bright Horizons vs Zoom Phone</p>
                    <p className="text-[10px] text-[#8b8d97] mt-0.5">Bright Horizons Education · Scheduled</p>
                  </div>
                )}
                {hour === "8 AM" && (
                  <div className="absolute right-0 top-0 text-[10px] text-[#8b8d97] bg-white px-2 py-0.5 rounded-full border border-[#e7e8ec] shadow-sm">
                    Appointment
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const PipelineBoard = ({ pipeline }: { pipeline: typeof pipelineData[0] }) => (
  <div className="rounded-[10px] bg-white border border-[#e7e8ec] shadow-[0_1.5px_4px_0_rgba(0,0,0,0.05)] overflow-hidden">
    <div className="flex gap-0 overflow-x-auto">
      {pipeline.columns.map((col, ci) => (
        <div key={ci} className="flex-1 min-w-[180px] border-r border-[#e7e8ec] last:border-r-0">
          <div className="px-3 py-2.5 bg-[#f8f9fb] border-b border-[#e7e8ec] flex items-center justify-between">
            <span className="text-[12px] font-semibold text-[#48494c] uppercase tracking-[0.04em]">{col.title}</span>
            <span className="text-[11px] font-medium text-[#8b8d97] bg-white border border-[#e7e8ec] rounded-full w-5 h-5 flex items-center justify-center">{col.count}</span>
          </div>
          <div className="p-2 space-y-2 min-h-[100px]">
            {col.items.map((item, ii) => (
              <div key={ii} className="bg-white rounded-[8px] px-3 py-2.5 border border-[#e7e8ec] hover:shadow-[0_1.5px_4px_0_rgba(0,0,0,0.06)] hover:border-[#d0d2d8] transition-all cursor-pointer group">
                <p className="text-[13px] font-medium text-[#323439] truncate group-hover:text-[#0040dd] transition-colors">{item.name}</p>
                {item.sub && <p className="text-[11px] text-[#8b8d97] mt-0.5 truncate">{item.sub}</p>}
              </div>
            ))}
            {col.items.length === 0 && (
              <div className="flex items-center justify-center h-16 text-[11px] text-[#8b8d97] italic">
                No items
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default function RedesignedDashboard() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [selectedInteractionId, setSelectedInteractionId] = useState<number | null>(8);

  return (
    <div className="flex h-screen bg-[#f5f6f9] font-['Inter',sans-serif]">
      <Sidebar collapsed={sidebarCollapsed} onToggle={() => setSidebarCollapsed(!sidebarCollapsed)} />
      
      <main className="flex-1 flex flex-col min-w-0 h-screen overflow-hidden">
        <div className="flex-1 overflow-auto">
          <div className="p-4 space-y-4">
            
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
              <div className="lg:col-span-3 rounded-[10px] bg-white border border-[#e7e8ec] shadow-[0_1.5px_4px_0_rgba(0,0,0,0.05)] overflow-hidden flex flex-col">
                <div className="px-4 py-3 border-b border-[#e7e8ec] flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-[8px] bg-amber-50 flex items-center justify-center">
                      <Clock size={14} className="text-amber-600" />
                    </div>
                    <h3 className="text-[14px] font-semibold text-[#161618]">Due / Overdue</h3>
                    <span className="text-[11px] font-semibold text-[#8b8d97] bg-[#f0f1f4] rounded-full min-w-[20px] h-5 flex items-center justify-center px-1.5">{dueItems.length}</span>
                    <span className="text-[11px] font-semibold text-red-600 bg-red-50 border border-red-200 rounded-full h-5 flex items-center justify-center px-1.5">{dueItems.filter(i => i.status === "OVERDUE").length} overdue</span>
                  </div>
                  <MoreHorizontal size={16} className="text-[#8b8d97]" />
                </div>
                <div className="max-h-[320px] overflow-y-auto scrollbar-auto-hide">
                  <div className="divide-y divide-[#f0f1f4]">
                    {dueItems.map(item => {
                      const statusIcon = item.status === "OVERDUE"
                        ? <AlertTriangle size={12} className="text-red-400" />
                        : item.status === "DUE TODAY"
                        ? <Clock size={12} className="text-amber-400" />
                        : item.status === "DUE SOON"
                        ? <Clock size={12} className="text-orange-300" />
                        : <ArrowRight size={12} className="text-[#c5c6cc]" />;
                      return (
                        <div key={item.id} className="flex items-center gap-3 px-4 py-2.5 hover:bg-[#f8f9fb] transition-colors group">
                          <div className={`p-1.5 rounded-[8px] shrink-0 ${typeIconColor(item.type)}`}>
                            <item.icon size={14} strokeWidth={1.8} />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2">
                              <span className="text-[11px] font-semibold text-[#8b8d97] shrink-0">{item.type}</span>
                              <span className="text-[12px] text-[#323439] font-medium truncate">{item.title}</span>
                            </div>
                          </div>
                          <span className="text-[10px] text-[#8b8d97] whitespace-nowrap shrink-0">{item.deadline}</span>
                          <span className="shrink-0" title={item.status}>{statusIcon}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-2 rounded-[10px] bg-white border border-[#e7e8ec] shadow-[0_1.5px_4px_0_rgba(0,0,0,0.05)] overflow-hidden flex flex-col max-h-[380px]">
                <ScheduleCalendar />
              </div>
            </div>

            <div className="rounded-[10px] bg-white border border-[#e7e8ec] shadow-[0_1.5px_4px_0_rgba(0,0,0,0.05)] overflow-hidden">
              <Tabs defaultValue="opportunity" className="w-full">
                <TabsList className="w-full justify-start h-auto p-0 bg-transparent rounded-none border-b border-[#e7e8ec] px-4 pt-1 gap-0">
                  {pipelineData.map((p, idx) => (
                    <TabsTrigger
                      key={idx}
                      value={p.name.split(" ")[0].toLowerCase()}
                      className="relative text-[13px] font-medium px-4 py-2.5 rounded-none border-b-2 border-transparent text-[#8b8d97] hover:text-[#323439] transition-colors data-[state=active]:text-[#0040dd] data-[state=active]:border-[#0040dd] data-[state=active]:bg-transparent data-[state=active]:shadow-none bg-transparent shadow-none flex items-center gap-2"
                    >
                      <span className={`w-2 h-2 rounded-full ${p.color} shrink-0`} />
                      {p.name.replace(" Pipeline", "")}
                      <span className="text-[11px] font-semibold text-[#8b8d97] bg-[#f0f1f4] rounded-full min-w-[20px] h-5 flex items-center justify-center px-1.5">{p.count}</span>
                    </TabsTrigger>
                  ))}
                </TabsList>
                {pipelineData.map((pipeline, idx) => (
                  <TabsContent key={idx} value={pipeline.name.split(" ")[0].toLowerCase()} className="mt-0">
                    <PipelineBoard pipeline={pipeline} />
                  </TabsContent>
                ))}
              </Tabs>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
              <div className="lg:col-span-3 rounded-[10px] bg-white border border-[#e7e8ec] shadow-[0_1.5px_4px_0_rgba(0,0,0,0.05)] overflow-hidden">
                <div className="px-4 py-3 border-b border-[#e7e8ec] flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-[8px] bg-[#0040dd]/10 flex items-center justify-center">
                      <MessageSquare size={14} className="text-[#0040dd]" />
                    </div>
                    <h3 className="text-[14px] font-semibold text-[#161618]">Recent Interactions</h3>
                    <span className="text-[11px] font-semibold text-[#8b8d97] bg-[#f0f1f4] rounded-full min-w-[20px] h-5 flex items-center justify-center px-1.5">{recentInteractions.length}</span>
                  </div>
                  <MoreHorizontal size={16} className="text-[#8b8d97]" />
                </div>
                <ScrollArea className="max-h-[280px]">
                  <div className="divide-y divide-[#f0f1f4]">
                    {recentInteractions.map(interaction => (
                      <div
                        key={interaction.id}
                        className={`flex items-center gap-3 px-4 py-2.5 cursor-pointer transition-all ${
                          selectedInteractionId === interaction.id
                            ? "bg-[#0040dd]/[0.04] border-l-2 border-l-[#0040dd]"
                            : "hover:bg-[#f8f9fb] border-l-2 border-l-transparent"
                        }`}
                        onClick={() => setSelectedInteractionId(interaction.id)}
                      >
                        <span className="text-[11px] text-[#8b8d97] w-[76px] shrink-0 tabular-nums">{interaction.date}</span>
                        <div className={`inline-flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded-full shrink-0 ${
                          interaction.type === "email"
                            ? "bg-[#0040dd]/10 text-[#0040dd]"
                            : "bg-emerald-50 text-emerald-600"
                        }`}>
                          {interaction.type === "email" ? <Mail size={10} /> : <Phone size={10} />}
                          {interaction.type}
                        </div>
                        <span className="text-[12px] font-semibold text-[#323439] w-[90px] shrink-0 truncate">{interaction.contact}</span>
                        <span className="text-[11px] text-[#8b8d97] truncate flex-1">{interaction.notes}</span>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </div>

              {selectedInteractionId && (
                <div className="lg:col-span-2 rounded-[10px] bg-white border border-[#e7e8ec] shadow-[0_1.5px_4px_0_rgba(0,0,0,0.05)] overflow-hidden flex flex-col max-h-[340px]">
                  <div className="px-4 py-3 border-b border-[#e7e8ec] flex items-center justify-between">
                    <p className="text-[13px] text-[#323439] font-semibold truncate flex-1 leading-snug">{selectedInteraction.title}</p>
                    <button onClick={() => setSelectedInteractionId(null)} className="p-1.5 hover:bg-[#f0f1f4] rounded-full transition-colors shrink-0 ml-2">
                      <X size={14} className="text-[#8b8d97]" />
                    </button>
                  </div>
                  <ScrollArea className="flex-1">
                    <div className="p-4 space-y-4">
                      <div className="bg-[#f8f9fb] rounded-[8px] p-3.5 border border-[#e7e8ec]">
                        <p className="text-[13px] font-medium text-[#323439] leading-relaxed">{selectedInteraction.fullNote}</p>
                      </div>

                      <div className="flex items-center gap-2.5">
                        <div className="inline-flex items-center gap-1.5 text-[11px] font-semibold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200">
                          <Phone size={11} />
                          {selectedInteraction.type}
                        </div>
                        <span className="text-[11px] text-[#8b8d97]">{selectedInteraction.date}</span>
                      </div>

                      <div className="pt-3 border-t border-[#e7e8ec]">
                        <p className="text-[10px] font-semibold text-[#8b8d97] uppercase tracking-[0.06em] mb-2.5">Related</p>
                        <div className="space-y-2">
                          {selectedInteraction.related.map((rel, i) => (
                            <div key={i} className="flex items-center gap-3">
                              <span className="text-[11px] text-[#8b8d97] w-20 shrink-0">{rel.label}</span>
                              <span className="text-[12px] text-[#0040dd] font-medium hover:underline cursor-pointer">{rel.value}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="pt-3 border-t border-[#e7e8ec]">
                        <div className="flex items-center gap-1.5 mb-2.5">
                          <ChevronDown size={12} className="text-[#8b8d97]" />
                          <p className="text-[10px] font-semibold text-[#8b8d97] uppercase tracking-[0.06em]">Transcript</p>
                        </div>
                        <div className="bg-[#f8f9fb] rounded-[8px] p-3 border border-[#e7e8ec]">
                          <p className="text-[12px] text-[#48494c] leading-relaxed">
                            {selectedInteraction.transcript}
                          </p>
                        </div>
                      </div>
                    </div>
                  </ScrollArea>
                </div>
              )}
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}
