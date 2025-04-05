"use client"
import Link from "next/link";
import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import SettingsIcon from '@mui/icons-material/Settings';
import { Button } from "@/components/ui/button"
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import SummarizeIcon from '@mui/icons-material/Summarize';
import OfflineBoltRoundedIcon from '@mui/icons-material/OfflineBoltRounded';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function Header() {
    const { setTheme } = useTheme()
    const isLogin: boolean = false


    return (
        <>
            <nav className="container flex justify-between items-center py-4 lg:px-6 px-2 mx-auto">
                <div className="flex">
                    <div className="flex items-center gap-1">
                        <OfflineBoltRoundedIcon sx={{ fontSize: 40, transform: "rotate(30deg)" }} />
                        <Link className="text-2xl font-bold" href='/'>Expense Tracker</Link>
                    </div>

                    <div className="hidden lg:flex gap-4 ms-12 font-semibold">
                        <div className="flex items-center gap-2">
                            <DashboardIcon />
                            <Link href='/'>Dashboard</Link>
                        </div>
                        <div className="flex items-center gap-2">
                            <AccountBalanceIcon />
                            <Link href='/transactions'>Transaction</Link>
                        </div>
                        <div className="flex items-center gap-2">
                            <SummarizeIcon />
                            <Link href='/reports'>Reports</Link>
                        </div>
                        <div className="flex items-center gap-2">
                            <AnalyticsIcon />
                            <Link href='/insights'>AI Insights</Link>
                        </div>
                    </div>
                </div>
                <div className="lg:flex items-center gap-4">
                    <div>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="outline" size="icon">
                                    <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                                    <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                                    <span className="sr-only">Toggle theme</span>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuItem onClick={() => setTheme("light")}>
                                    Light
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={() => setTheme("dark")}>
                                    Dark
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                    {
                        isLogin ? (
                            <div className="flex items-center gap-4">
                                <CircleNotificationsIcon />
                                <SettingsIcon />
                            </div>
                        ) : (
                            <div className="flex items-center gap-4">
                                <Button>Login</Button>
                                <Button>Signup</Button>
                            </div>
                        )
                    }
                </div>
            </nav>
        </>
    )
}