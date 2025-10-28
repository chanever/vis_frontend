
const RightPanel: React.FC = () => {
  return (
    <div className="w-80 bg-white border-l border-gray-200 p-6 overflow-y-auto">
      <div className="space-y-4">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          Warning Details
        </h2>
        
        {/* Empty State */}
        <div className="text-center py-8">
          <div className="text-4xl mb-3">🔍</div>
          <p className="text-gray-500 text-sm">
            Select a node to view details
          </p>
        </div>

        {/* Table Placeholder */}
        <div className="border border-gray-200 rounded-lg overflow-hidden">
          <div className="bg-gray-50 px-4 py-2 border-b border-gray-200">
            <h3 className="text-sm font-medium text-gray-700">
              Warning Information
            </h3>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Tool
                  </th>
                  <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Type
                  </th>
                  <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Severity
                  </th>
                  <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    File
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {/* Placeholder rows */}
                <tr>
                  <td className="px-3 py-2 text-gray-400">-</td>
                  <td className="px-3 py-2 text-gray-400">-</td>
                  <td className="px-3 py-2 text-gray-400">-</td>
                  <td className="px-3 py-2 text-gray-400">-</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 text-gray-400">-</td>
                  <td className="px-3 py-2 text-gray-400">-</td>
                  <td className="px-3 py-2 text-gray-400">-</td>
                  <td className="px-3 py-2 text-gray-400">-</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 text-gray-400">-</td>
                  <td className="px-3 py-2 text-gray-400">-</td>
                  <td className="px-3 py-2 text-gray-400">-</td>
                  <td className="px-3 py-2 text-gray-400">-</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Additional Info Placeholder */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h4 className="text-sm font-medium text-blue-900 mb-2">
            Node Information
          </h4>
          <div className="space-y-1 text-xs text-blue-700">
            <div>Function: <span className="text-gray-600">-</span></div>
            <div>Complexity: <span className="text-gray-600">-</span></div>
            <div>Call Count: <span className="text-gray-600">-</span></div>
            <div>Warnings: <span className="text-gray-600">-</span></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightPanel;
