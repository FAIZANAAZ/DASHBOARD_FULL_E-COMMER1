"use client"
import React from 'react'
import OrdersTable from './Order_pages/orders-table'

const ForServer = () => {
  return (
    <div>
       <OrdersTable
                searchQuery={""}
                onToggleSelection={() => {
                  
                }}
              />
    </div>
  )
}

export default ForServer
