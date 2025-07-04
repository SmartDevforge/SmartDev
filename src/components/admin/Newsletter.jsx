"use client"

import { useState } from "react"

const mockNewsletters = [
  {
    id: 1,
    subject: "Monthly Tech Updates - December 2024",
    content: "Discover the latest trends in web development and our recent project successes...",
    status: "sent",
    sentDate: "2024-12-01",
    recipients: 1250,
    openRate: 68,
    clickRate: 12,
    type: "monthly",
  },
  {
    id: 2,
    subject: "New Service Launch: AI Integration",
    content: "We are excited to announce our new AI integration services for businesses...",
    status: "draft",
    sentDate: null,
    recipients: 0,
    openRate: 0,
    clickRate: 0,
    type: "announcement",
  },
  {
    id: 3,
    subject: "Client Success Story: E-commerce Platform",
    content: "Learn how we helped TechCorp increase their online sales by 300%...",
    status: "scheduled",
    sentDate: "2024-12-15",
    recipients: 1180,
    openRate: 0,
    clickRate: 0,
    type: "case-study",
  },
  {
    id: 4,
    subject: "Holiday Greetings & Year-End Recap",
    content: "As we wrap up another successful year, we want to thank our amazing clients...",
    status: "sent",
    sentDate: "2024-11-25",
    recipients: 1300,
    openRate: 75,
    clickRate: 18,
    type: "seasonal",
  },
]

const mockSubscribers = [
  { id: 1, email: "john@techcorp.com", name: "John Doe", subscribed: "2024-01-15", status: "active" },
  { id: 2, email: "sarah@startup.com", name: "Sarah Wilson", subscribed: "2024-02-20", status: "active" },
  { id: 3, email: "mike@globaltech.com", name: "Mike Chen", subscribed: "2024-03-10", status: "active" },
  { id: 4, email: "lisa@innovate.com", name: "Lisa Brown", subscribed: "2024-04-05", status: "unsubscribed" },
]

const Newsletter = () => {
  const [activeTab, setActiveTab] = useState('newsletters')
  const [newsletters, setNewsletters] = useState(mockNewsletters)
  const [subscribers, setSubscribers] = useState(mockSubscribers)
  const [searchTerm, setSearchTerm] = useState('')
  const [filterStatus, setFilterStatus] = useState('all')
  const [showCreateModal, setShowCreateModal] = useState(false)
  const [newNewsletter, setNewNewsletter] = useState({
    subject: '',
    content: '',
    type: 'monthly'
  })

  const getStatusColor = (status) => {
    switch (status) {
      case 'sent':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
      case 'draft':
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200'
      case 'scheduled':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200'
    }
  }

  const getTypeColor = (type) => {
    switch (type) {
      case 'monthly':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200'
      case 'announcement':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
      case 'case-study':
        return 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200'
      case 'seasonal':
        return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200'
    }
  }

  // const filteredNewsletters = newsletters.filter(newsletter => {


  }