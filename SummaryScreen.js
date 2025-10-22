const SummaryScreen = ({ dishes, dispatch }) => {
    const totalDishes = dishes.length;
    const totalRevenuePotential = dishes.reduce((sum, dish) => sum + dish.price, 0);
    const averagePrice = totalDishes > 0 ? totalRevenuePotential / totalDishes : 0;
    const averagePrepTime = totalDishes > 0 ? dishes.reduce((sum, dish) => sum + dish.prepTime, 0) / totalDishes : 0;

    const statCard = (title, value,  color) => (
        <div className={`p-6 bg-white rounded-xl shadow-lg border border-${color}-100`}>
            <div className={`flex items-center text-${color}-600`}>
                <Icon className="w-8 h-8 mr-3" />
                <p className="text-xl font-medium text-gray-500">{title}</p>
            </div>
            <p className="text-4xl font-extrabold text-gray-800 mt-2">{value}</p>
        </div>
    );

    return (
        <ScreenWrapper title="Menu Summary" dispatch={dispatch}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {statCard("Total Dishes", totalDishes, List, 'indigo')}
                {statCard("Avg. Price", `$${averagePrice.toFixed(2)}`, DollarSign, 'green')}
                {statCard("Total Value", `$${totalRevenuePotential.toFixed(2)}`, DollarSign, 'blue')}
                {statCard("Avg. Prep Time", `${averagePrepTime.toFixed(0)} min`, Clock, 'yellow')}
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-xl">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Dish Breakdown</h2>
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Dish Name</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ingredients</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Prep Time</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {dishes.map((dish, index) => (
                                <tr key={dish.id} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{dish.name}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{dish.ingredients}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${dish.price.toFixed(2)}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{dish.prepTime} min</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </ScreenWrapper>
    );
};

