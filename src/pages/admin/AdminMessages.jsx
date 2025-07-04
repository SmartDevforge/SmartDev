import React from 'react'
import AdminSidebar from '../../components/admin/admin-sidebar'
import AdminMessage from '../../components/admin/AdminMessages'

function AdminMessages() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-p1 via-p5 to-p4">
            <div className="flex">
                <AdminSidebar />
                <main className="flex-1 p-6 ml-64">
                    <AdminMessage />
                </main>
            </div>
        </div>
    )
}

export default AdminMessages