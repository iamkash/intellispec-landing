'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Mail, Phone, Send, CheckCircle, HardHat, Shield, Clock, Users, AlertCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Card, CardContent } from '@/components/ui/card'

const supportSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  company: z.string().min(2, 'Company name must be at least 2 characters'),
  priority: z.string().min(1, 'Please select priority level'),
  category: z.string().min(1, 'Please select a category'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  description: z.string().min(20, 'Please provide a detailed description (at least 20 characters)'),
})

type SupportFormData = z.infer<typeof supportSchema>

const priorityLevels = [
  'Low - General Question',
  'Medium - Feature Request',
  'High - Bug Report',
  'Critical - System Down'
]

const supportCategories = [
  'Technical Support',
  'Account & Billing',
  'Feature Request',
  'Bug Report',
  'Training & Documentation',
  'Integration Help',
  'Performance Issues',
  'Other'
]

export default function SupportForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    watch
  } = useForm<SupportFormData>({
    resolver: zodResolver(supportSchema)
  })

  const onSubmit = async (data: SupportFormData) => {
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    console.log('Support form data:', data)
    setIsSubmitting(false)
    setIsSubmitted(true)
    reset()
    
    // Reset success state after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  return (
    <section className="section-padding glass-section-alt">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Support Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center px-4 py-2 glass-card rounded-full text-sm font-medium mb-6">
              <HardHat className="w-4 h-4 text-primary mr-2" />
              <span className="text-foreground">Support Center</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              How Can We <span className="gradient-text">Help You</span> Today?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Our expert support team is ready to assist you with any questions, issues, or requests across all <span className="text-primary font-semibold">10 modules</span>.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Email Support</h3>
                  <p className="text-muted-foreground">support@intellispec.com</p>
                  <p className="text-muted-foreground/80 text-sm">Response within 4 hours</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-secondary rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Phone Support</h3>
                  <p className="text-muted-foreground">+1 (555) 123-4567</p>
                  <p className="text-muted-foreground/80 text-sm">Mon-Fri, 8AM-6PM CST</p>
                </div>
              </div>
            </div>

            <Card className="glass-card border-border/30 shadow-xl">
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-4 flex items-center">
                  <Shield className="w-5 h-5 text-primary mr-2" />
                  What to Expect
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="text-muted-foreground text-sm">Expert technical assistance</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="text-muted-foreground text-sm">Priority-based response times</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="text-muted-foreground text-sm">Detailed issue resolution</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="text-muted-foreground text-sm">Follow-up until resolved</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Support Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="glass-card border-border/30 shadow-2xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Submit Support Ticket
                </h3>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <CheckCircle className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-xl font-semibold text-foreground mb-2">
                      Ticket Submitted!
                    </h4>
                    <p className="text-muted-foreground">
                      We&apos;ve received your support request and will get back to you based on the priority level.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                          Full Name *
                        </label>
                        <Input
                          {...register('name')}
                          type="text"
                          id="name"
                          autoComplete="name"
                          placeholder="Enter your full name"
                          className={`ios-input ${errors.name ? 'border-red-400' : ''}`}
                        />
                        {errors.name && (
                          <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                          Email Address *
                        </label>
                        <Input
                          {...register('email')}
                          type="email"
                          id="email"
                          autoComplete="email"
                          placeholder="Enter your email address"
                          className={`ios-input ${errors.email ? 'border-red-400' : ''}`}
                        />
                        {errors.email && (
                          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                        Company *
                      </label>
                      <Input
                        {...register('company')}
                        type="text"
                        id="company"
                        autoComplete="organization"
                        placeholder="Enter your company name"
                        className={`ios-input ${errors.company ? 'border-red-400' : ''}`}
                      />
                      {errors.company && (
                        <p className="text-red-500 text-sm mt-1">{errors.company.message}</p>
                      )}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label id="priority-label" className="block text-sm font-medium text-foreground mb-2">
                          Priority Level *
                        </label>
                        <Select onValueChange={(value) => setValue('priority', value)}>
                          <SelectTrigger className="ios-input" aria-labelledby="priority-label">
                            <SelectValue placeholder="Select priority" />
                          </SelectTrigger>
                          <SelectContent>
                            {priorityLevels.map((priority) => (
                              <SelectItem key={priority} value={priority}>
                                {priority}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <input type="hidden" id="priority" {...register('priority')} autoComplete="off" />
                        {errors.priority && (
                          <p className="text-red-500 text-sm mt-1">{errors.priority.message}</p>
                        )}
                      </div>

                      <div>
                        <label id="category-label" className="block text-sm font-medium text-foreground mb-2">
                          Category *
                        </label>
                        <Select onValueChange={(value) => setValue('category', value)}>
                          <SelectTrigger className="ios-input" aria-labelledby="category-label">
                            <SelectValue placeholder="Select category" />
                          </SelectTrigger>
                          <SelectContent>
                            {supportCategories.map((category) => (
                              <SelectItem key={category} value={category}>
                                {category}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <input type="hidden" id="category" {...register('category')} autoComplete="off" />
                        {errors.category && (
                          <p className="text-red-500 text-sm mt-1">{errors.category.message}</p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                        Subject *
                      </label>
                      <Input
                        {...register('subject')}
                        type="text"
                        id="subject"
                        autoComplete="off"
                        placeholder="Brief description of your issue"
                        className={`ios-input ${errors.subject ? 'border-red-400' : ''}`}
                      />
                      {errors.subject && (
                        <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="description" className="block text-sm font-medium text-foreground mb-2">
                        Detailed Description *
                      </label>
                      <Textarea
                        {...register('description')}
                        id="description"
                        autoComplete="off"
                        placeholder="Please provide detailed information about your issue, including steps to reproduce, error messages, and any relevant context..."
                        rows={6}
                        className={`ios-input ${errors.description ? 'border-red-400' : ''}`}
                      />
                      {errors.description && (
                        <p className="text-red-500 text-sm mt-1">{errors.description.message}</p>
                      )}
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center">
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          Submitting...
                        </div>
                      ) : (
                        <div className="flex items-center">
                          <Send className="w-4 h-4 mr-2" />
                          Submit Support Ticket
                        </div>
                      )}
                    </button>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 