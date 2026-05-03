import prisma from "../../config/prisma.config"

export const getOrderCount = async () => {
    let count = prisma.order.count({
        where: {
            AND: [{ total: { AND: [{ gte: 100, }, { lte: 1000 }] } },
            {
                status: {
                    AND: [{ in: ['PAID', 'PENDING'] },
                    {
                        contains: 'phone', mode: 'insensitive',
                    },
                    {
                        startsWith: 'iPhone',
                    }, {
                        endsWith: 'pro'
                    }]
                }
            }, {}],

        }
    })

}

export const getOrderStats = async () => {
    return prisma.order.aggregate({
        _sum: {
            total: true
        },
        _max: {
            total: true
        },
        _min: {
            total: true
        },
        _avg: {
            total: true
        }
    })
}

export const statusCount = async () => {
    return prisma.order.groupBy({
        by: ['status'],
        _count: { id: true }
    })
}

export const topUserOrders = async () => {

    return prisma.order.groupBy({
        by: ['userId'],
        _sum: {
            total: true
        },
        having: {
            total: {
                _sum: {
                    gt: 1600
                }
            }
        }
    })
}

export const totalRevenueForPaidUsers = async () => {
    return prisma.order.aggregate({
        where: {
            status: 'PAID'
        },
        _sum: {
            total: true
        }
    })
}

export const expensiveOrders = async () => {
    let res = await prisma.order.count({
        where: { total: { gt: 500 } }
    })
}

export const revenuePerUser = async () => {
    let revenue = await prisma.orders.groupBy({
        by: ['userId']
    })
}

export const topUsersPerRevenue = async () => {
    return await prisma.employees.groupBy({
        by: ['salary'],

        orderBy: {
            salary: 'desc'
        },
        skip: 1,
        take: 1
    })
}


export const countOrders = async () => {
    return await prisma.orders.groupBy({
        by: ['userId'],

        _count: {
            id: true
        },

        where: {
            status: 'PAID'
        }

    })
}

export const userRevenue = async () => {
    return await prisma.orders.groupBy({
        by: ['userId'],

        where: {
            user: {
                email: {
                    contains: 'gmail'
                }
            }
        },

        _sum: {
            total: true
        }
    })
}


export const gt50000 = async () => {
    return await prisma.orders.groupBy({
        by: ['userId'],
        _sum: {
            total: true
        },
        having: {
            _sum: {
                total: { gt: 50000 }
            }
        }
    })
}
