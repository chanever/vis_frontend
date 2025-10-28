
const GraphPlaceholder: React.FC = () => {
  return (
    <div className="flex-1 bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 rounded-lg m-4 flex items-center justify-center">
      <div className="text-center">
        <div className="text-6xl mb-4">📊</div>
        <h3 className="text-xl font-semibold text-gray-700 mb-2">
          Call Graph Visualization
        </h3>
        <p className="text-gray-500 text-sm">
          (coming soon)
        </p>
        <div className="mt-4 text-xs text-gray-400">
          Interactive call graph will be rendered here
        </div>
      </div>
    </div>
  );
};

export default GraphPlaceholder;
