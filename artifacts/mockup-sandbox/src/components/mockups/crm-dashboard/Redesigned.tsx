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
  PanelLeftClose
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

// --- MOCK DATA ---

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

const overdueItems = [
  { id: 1, type: "Task", title: "Follow up with Sarah Re: Contract", due: "Yesterday", status: "OVERDUE", priority: "High" },
  { id: 2, type: "Escalation", title: "Billing dispute #8992", due: "2 days ago", status: "OVERDUE", priority: "Critical" },
  { id: 3, type: "Support", title: "API integration issue - John Doe", due: "Today 10:00 AM", status: "DUE SOON", priority: "Medium" },
];

const schedule = [
  { id: 1, time: "09:00 AM", title: "Daily Standup", type: "Internal" },
  { id: 2, time: "11:30 AM", title: "Property Viewing - 124 Main St", type: "Meeting", client: "Alice Smith" },
  { id: 3, time: "02:00 PM", title: "Q3 Strategy Sync", type: "Meeting", client: "Acme Corp" },
  { id: 4, time: "04:15 PM", title: "Follow-up call - Demo", type: "Call", client: "Bob Johnson" },
];

const pipelines = {
  opportunities: [
    { title: "Discovery", items: [
      { id: 101, name: "Stark Industries Expansion", value: "$450k", company: "Stark Ind.", age: "2 days" },
      { id: 102, name: "Wayne Ent. Lease", value: "$1.2M", company: "Wayne Ent.", age: "5 days" }
    ]},
    { title: "Proposal", items: [
      { id: 103, name: "Acme Corp HQ Relocation", value: "$850k", company: "Acme Corp", age: "12 days" }
    ]},
    { title: "Negotiation", items: [
      { id: 104, name: "Globex Warehouse", value: "$2.1M", company: "Globex", age: "20 days" }
    ]},
    { title: "Closed Won", items: [] }
  ],
  supportCases: [
    { title: "New", items: [
      { id: 201, name: "Login Issue", priority: "High", client: "Jane Doe" }
    ]},
    { title: "In Progress", items: [
      { id: 202, name: "Data Export Failed", priority: "Medium", client: "Acme Corp" },
      { id: 203, name: "Billing Inquiry", priority: "Low", client: "Stark Ind." }
    ]},
    { title: "Waiting on Customer", items: [
      { id: 204, name: "Clarification needed on API", priority: "Medium", client: "Globex" }
    ]}
  ],
  onboarding: [
    { title: "Kickoff", items: [
      { id: 301, name: "Initech Setup", status: "On Track" }
    ]},
    { title: "Data Migration", items: [
      { id: 302, name: "Umbrella Corp Migration", status: "Delayed" }
    ]},
    { title: "Training", items: [
      { id: 303, name: "Massive Dynamic Training", status: "On Track" }
    ]}
  ]
};

const interactions = [
  { id: 1, date: "Mar 29, 2024 - 14:32", type: "Email", contact: "Alice Smith", company: "Acme Corp", notes: "Sent the updated proposal for the downtown office space. Waiting for their review." },
  { id: 2, date: "Mar 29, 2024 - 11:15", type: "Voice", contact: "Bob Johnson", company: "Globex", notes: "Discussed the warehouse lease terms. They are asking for a 5% discount." },
  { id: 3, date: "Mar 28, 2024 - 16:45", type: "Email", contact: "Jane Doe", company: "Stark Ind.", notes: "Follow up on the expansion plans. No response yet." },
  { id: 4, date: "Mar 28, 2024 - 09:30", type: "Meeting", contact: "Bruce Wayne", company: "Wayne Ent.", notes: "Initial property walkthrough. Very positive feedback." },
];

// --- COMPONENTS ---

const NavSection = ({ label, items }: { label: string, items: { name: string, icon: any, count?: number }[] }) => (
  <>
    <div className="flex items-center pt-4 pb-2 px-2.5">
      <span className="text-[11px] font-medium text-[#8b8d97] uppercase tracking-[0.06em]">{label}</span>
      <div className="flex-1 h-px bg-[#e7e8ec] ml-3" />
    </div>
    <div className="space-y-px">
      {items.map((item) => (
        <button
          key={item.name}
          className="w-full flex items-center gap-3 px-2.5 py-[7px] rounded-[10px] text-[14px] font-medium text-[#323439] hover:bg-white hover:shadow-[0_1.5px_4px_0_rgba(0,0,0,0.06)] transition-all group"
        >
          <item.icon size={20} strokeWidth={1.8} className="text-[#8b8d97] opacity-80 group-hover:opacity-100 shrink-0" />
          <span className="flex-1 text-left opacity-80 group-hover:opacity-100">{item.name}</span>
          {item.count !== undefined && (
            <span className="text-[12px] text-[#8b8d97] tabular-nums opacity-60">{item.count}</span>
          )}
        </button>
      ))}
    </div>
  </>
);

const Sidebar = () => (
  <aside
    className="w-[260px] border-r border-[#e7e8ec] flex flex-col h-screen overflow-y-auto flex-shrink-0 p-4 gap-4"
    style={{ background: "linear-gradient(90deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.2) 100%), linear-gradient(90deg, #f5f6f9 0%, #f5f6f9 100%)" }}
  >
    <div className="flex items-center justify-between h-8">
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 rounded-[6px] bg-gradient-to-br from-[#ff8800] to-[#ff6600] flex items-center justify-center shadow-sm">
          <Building2 size={14} className="text-white" strokeWidth={2.2} />
        </div>
        <span className="font-bold text-[15px] text-[#161618] leading-5">Real Estate Office</span>
      </div>
      <button className="p-1.5 rounded-full hover:bg-white/80 transition-colors">
        <PanelLeftClose size={16} className="text-[#8b8d97]" />
      </button>
    </div>

    <div className="bg-white rounded-[10px] border border-[rgba(221,223,229,0.5)] shadow-[0_1.5px_4px_0_rgba(0,0,0,0.05)] overflow-hidden">
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
    </div>

    <div className="flex-1 overflow-y-auto -mx-1 px-1">
      <div className="space-y-px">
        <button className="w-full flex items-center gap-3 px-2.5 py-[7px] rounded-[10px] text-[14px] font-medium bg-white shadow-[0_1.5px_4px_0_rgba(0,0,0,0.06)] text-[#161618] border border-[rgba(221,223,229,0.3)]">
          <Home size={20} strokeWidth={1.8} className="text-[#0040dd] shrink-0" />
          <span className="flex-1 text-left">Home</span>
        </button>
      </div>

      <NavSection label="Contacts" items={contactsNav} />
      <NavSection label="Items" items={itemsNav} />
      <NavSection label="Interactions" items={interactionsNav} />

      <div className="flex items-center pt-4 pb-2 px-2.5">
        <span className="text-[11px] font-medium text-[#8b8d97] uppercase tracking-[0.06em]">Configuration</span>
        <div className="flex-1 h-px bg-[#e7e8ec] ml-3" />
      </div>
      <div className="space-y-px">
        {configNav.map((item) => (
          <button
            key={item.name}
            className="w-full flex items-center gap-3 px-2.5 py-[7px] rounded-[10px] text-[14px] font-medium text-[#323439] hover:bg-white hover:shadow-[0_1.5px_4px_0_rgba(0,0,0,0.06)] transition-all group"
          >
            <item.icon size={20} strokeWidth={1.8} className="text-[#8b8d97] opacity-80 group-hover:opacity-100 shrink-0" />
            <span className="flex-1 text-left opacity-80 group-hover:opacity-100">{item.name}</span>
          </button>
        ))}
      </div>
    </div>

    <div className="border-t border-[#e7e8ec] pt-3 mt-1">
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
    </div>
  </aside>
);

const KanbanBoard = ({ data }: { data: { title: string, items: any[] }[] }) => (
  <div className="flex h-full gap-4 pb-4 overflow-x-auto">
    {data.map((col, idx) => (
      <div key={idx} className="flex-shrink-0 w-72 flex flex-col gap-3">
        <div className="flex items-center justify-between pb-2">
          <h3 className="text-sm font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-2">
            {col.title}
            <span className="bg-slate-100 dark:bg-slate-800 text-slate-500 text-xs px-2 py-0.5 rounded-full">
              {col.items.length}
            </span>
          </h3>
          <Button variant="ghost" size="icon" className="h-6 w-6 text-slate-400">
            <Plus size={14} />
          </Button>
        </div>
        <div className="flex-1 space-y-3 min-h-[150px] bg-slate-50/50 dark:bg-slate-900/50 rounded-lg p-2 border border-slate-100 dark:border-slate-800 border-dashed">
          {col.items.map(item => (
            <Card key={item.id} className="cursor-pointer hover:shadow-md transition-all hover:border-indigo-200 dark:hover:border-indigo-800 group">
              <CardContent className="p-3">
                <div className="flex justify-between items-start mb-2">
                  <p className="font-medium text-sm text-slate-900 dark:text-slate-100 leading-tight group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">{item.name}</p>
                  <Button variant="ghost" size="icon" className="h-5 w-5 opacity-0 group-hover:opacity-100 -mr-1 -mt-1">
                    <MoreHorizontal size={14} />
                  </Button>
                </div>
                {item.company && <p className="text-xs text-slate-500 mb-2 flex items-center gap-1"><Building2 size={10} />{item.company}</p>}
                {item.client && <p className="text-xs text-slate-500 mb-2 flex items-center gap-1"><Contact size={10} />{item.client}</p>}
                
                <div className="flex items-center justify-between mt-3">
                  {item.value && <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 dark:bg-emerald-500/10 px-1.5 py-0.5 rounded">{item.value}</span>}
                  {item.priority && (
                    <Badge variant={item.priority === 'High' ? 'destructive' : 'secondary'} className="text-[10px] px-1.5 py-0">
                      {item.priority}
                    </Badge>
                  )}
                  {item.status && (
                    <span className="text-xs text-slate-500 bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded">{item.status}</span>
                  )}
                  {item.age && <span className="text-xs text-slate-400 flex items-center gap-1"><Clock size={10}/> {item.age}</span>}
                </div>
              </CardContent>
            </Card>
          ))}
          {col.items.length === 0 && (
            <div className="h-full flex items-center justify-center text-xs text-slate-400 italic py-8">
              No items
            </div>
          )}
        </div>
      </div>
    ))}
  </div>
);

export default function RedesignedDashboard() {
  return (
    <div className="flex min-h-screen bg-slate-50 dark:bg-slate-950 font-sans">
      <Sidebar />
      
      <main className="flex-1 flex flex-col min-w-0 h-screen overflow-hidden">
        {/* Header */}
        <header className="h-16 bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between px-6 flex-shrink-0 z-10">
          <div className="flex items-center gap-4">
            <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-100">Home</h2>
            <div className="hidden md:flex items-center relative">
              <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
              <Input 
                placeholder="Search anything..." 
                className="w-64 pl-9 bg-slate-100 dark:bg-slate-900 border-none h-9 text-sm focus-visible:ring-1 focus-visible:ring-indigo-500"
              />
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm" className="hidden md:flex items-center gap-2 text-slate-600 dark:text-slate-300">
              <Plus size={16} /> New Record
            </Button>
            <Button variant="ghost" size="icon" className="text-slate-500 relative">
              <Bell size={18} />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border border-white dark:border-slate-950"></span>
            </Button>
          </div>
        </header>

        {/* Scrollable Content */}
        <ScrollArea className="flex-1 px-6 py-6">
          <div className="max-w-[1400px] mx-auto space-y-6">
            
            {/* Top Row: Alerts & Schedule */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              
              {/* Due / Overdue */}
              <Card className="lg:col-span-2 border-red-100 dark:border-red-900/30 shadow-sm overflow-hidden flex flex-col">
                <div className="bg-red-50 dark:bg-red-950/20 border-b border-red-100 dark:border-red-900/30 px-5 py-3 flex justify-between items-center">
                  <div className="flex items-center gap-2 text-red-700 dark:text-red-400 font-semibold">
                    <AlertTriangle size={18} />
                    <span>Action Required</span>
                  </div>
                  <Badge variant="outline" className="bg-white dark:bg-slate-900 text-red-600 border-red-200">{overdueItems.length} Items</Badge>
                </div>
                <CardContent className="p-0 flex-1">
                  <div className="divide-y divide-slate-100 dark:divide-slate-800">
                    {overdueItems.map(item => (
                      <div key={item.id} className="p-4 flex items-start gap-4 hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-colors">
                        <div className={`mt-0.5 p-1.5 rounded-md ${item.status === 'OVERDUE' ? 'bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400' : 'bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400'}`}>
                          {item.type === 'Task' ? <CheckSquare size={16}/> : item.type === 'Support' ? <LifeBuoy size={16}/> : <AlertTriangle size={16}/>}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-slate-900 dark:text-slate-100 truncate">{item.title}</p>
                          <div className="flex items-center gap-3 mt-1 text-xs text-slate-500">
                            <span className="font-medium text-slate-700 dark:text-slate-300">{item.type}</span>
                            <span className="flex items-center gap-1 text-red-600 dark:text-red-400"><Clock size={12}/> {item.due}</span>
                          </div>
                        </div>
                        <Button variant="secondary" size="sm" className="h-8 shrink-0">Review</Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Today's Schedule */}
              <Card className="shadow-sm flex flex-col h-[300px]">
                <CardHeader className="px-5 py-4 border-b border-slate-100 dark:border-slate-800 pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-base font-semibold">Today's Schedule</CardTitle>
                    <div className="flex items-center gap-1 text-slate-400">
                      <Button variant="ghost" size="icon" className="h-6 w-6"><ChevronLeft size={16}/></Button>
                      <span className="text-xs font-medium text-slate-700 dark:text-slate-300">Mar 29</span>
                      <Button variant="ghost" size="icon" className="h-6 w-6"><ChevronRight size={16}/></Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-0 flex-1 overflow-auto">
                  <div className="divide-y divide-slate-100 dark:divide-slate-800">
                    {schedule.map(item => (
                      <div key={item.id} className="p-4 flex gap-4 hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-colors">
                        <div className="w-16 flex-shrink-0 text-right">
                          <p className="text-xs font-semibold text-slate-900 dark:text-slate-100">{item.time}</p>
                        </div>
                        <div className="flex-1 border-l-2 border-indigo-500 pl-4 py-0.5">
                          <p className="text-sm font-medium text-slate-900 dark:text-slate-100">{item.title}</p>
                          {item.client && <p className="text-xs text-slate-500 mt-1">{item.client}</p>}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="p-3 border-t border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50">
                  <Button variant="ghost" className="w-full text-xs text-indigo-600 dark:text-indigo-400">View Full Calendar</Button>
                </CardFooter>
              </Card>

            </div>

            {/* Pipelines Area */}
            <div className="pt-2">
              <Tabs defaultValue="opportunities" className="w-full">
                <div className="flex items-center justify-between mb-4">
                  <TabsList className="bg-slate-200/50 dark:bg-slate-800/50 p-1">
                    <TabsTrigger value="opportunities" className="text-xs sm:text-sm px-3 sm:px-4"><Briefcase className="w-4 h-4 mr-2 hidden sm:inline-block"/>Opportunities</TabsTrigger>
                    <TabsTrigger value="support" className="text-xs sm:text-sm px-3 sm:px-4"><LifeBuoy className="w-4 h-4 mr-2 hidden sm:inline-block"/>Support</TabsTrigger>
                    <TabsTrigger value="onboarding" className="text-xs sm:text-sm px-3 sm:px-4"><Rocket className="w-4 h-4 mr-2 hidden sm:inline-block"/>Onboarding</TabsTrigger>
                  </TabsList>
                  <Button variant="outline" size="sm" className="hidden sm:flex items-center gap-2">
                    <Filter size={14} /> Filter
                  </Button>
                </div>

                <TabsContent value="opportunities" className="mt-0 focus-visible:outline-none focus-visible:ring-0">
                  <div className="bg-white dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm p-4 overflow-hidden">
                    <KanbanBoard data={pipelines.opportunities} />
                  </div>
                </TabsContent>
                
                <TabsContent value="support" className="mt-0 focus-visible:outline-none focus-visible:ring-0">
                  <div className="bg-white dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm p-4 overflow-hidden">
                    <KanbanBoard data={pipelines.supportCases} />
                  </div>
                </TabsContent>

                <TabsContent value="onboarding" className="mt-0 focus-visible:outline-none focus-visible:ring-0">
                  <div className="bg-white dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm p-4 overflow-hidden">
                    <KanbanBoard data={pipelines.onboarding} />
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            {/* Recent Interactions Table */}
            <Card className="shadow-sm">
              <CardHeader className="px-5 py-4 border-b border-slate-100 dark:border-slate-800">
                <CardTitle className="text-base font-semibold flex items-center gap-2">
                  <Clock size={18} className="text-slate-500" />
                  Recent Interactions
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <Table>
                  <TableHeader className="bg-slate-50/50 dark:bg-slate-900/50">
                    <TableRow className="hover:bg-transparent border-slate-100 dark:border-slate-800">
                      <TableHead className="w-[180px] text-xs font-semibold uppercase tracking-wider">Date</TableHead>
                      <TableHead className="w-[120px] text-xs font-semibold uppercase tracking-wider">Type</TableHead>
                      <TableHead className="w-[200px] text-xs font-semibold uppercase tracking-wider">Contact</TableHead>
                      <TableHead className="text-xs font-semibold uppercase tracking-wider">Notes</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {interactions.map((interaction) => (
                      <TableRow key={interaction.id} className="border-slate-100 dark:border-slate-800 hover:bg-slate-50/80 dark:hover:bg-slate-900/80">
                        <TableCell className="text-sm text-slate-500 py-3">{interaction.date}</TableCell>
                        <TableCell className="py-3">
                          <div className="flex items-center gap-1.5 text-sm font-medium text-slate-700 dark:text-slate-300">
                            {interaction.type === 'Email' ? <Mail size={14} className="text-blue-500" /> : 
                             interaction.type === 'Voice' ? <Phone size={14} className="text-emerald-500" /> : 
                             <Users size={14} className="text-purple-500" />}
                            {interaction.type}
                          </div>
                        </TableCell>
                        <TableCell className="py-3">
                          <div>
                            <p className="text-sm font-medium text-slate-900 dark:text-slate-100">{interaction.contact}</p>
                            <p className="text-xs text-slate-500">{interaction.company}</p>
                          </div>
                        </TableCell>
                        <TableCell className="py-3 text-sm text-slate-600 dark:text-slate-400 max-w-[400px] truncate">
                          {interaction.notes}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

          </div>
        </ScrollArea>
      </main>
    </div>
  );
}
