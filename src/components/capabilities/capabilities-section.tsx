import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { models, architectureRows, metricRows } from './data';

const CapabilitiesSection: React.FC = () => {
  return (
    <div className="relative w-full">
      <div className="flex w-full flex-col items-center text-base">
        <div className="w-full md:max-w-6xl">
          <div className="mx-8 border-b-1 pb-8">
            <div className="mt-16 mb-6 text-center text-3xl font-bold text-slate-600 md:mt-24 md:text-4xl">
              DeepSeek-V3 Capabilities
            </div>
            <p className="text-center text-slate-500">
              DeepSeek-V3 achieves a significant breakthrough in inference speed over previous
              models.
            </p>
            <p className="text-center text-slate-500">
              It tops the leaderboard among open-source models and rivals the most advanced
              closed-source models globally.
            </p>
          </div>

          <div className="overflow-x-auto px-8 pt-8 pb-16">
            <table className="w-full text-sm whitespace-nowrap text-slate-600">
              <tbody>
                <tr className="text-slate-500">
                  <th className="px-2 pt-2 pb-1"></th>
                  <th className="px-2 pt-2 pb-1" rowSpan={2}>
                    Benchmark (Metric)
                  </th>
                  {models.map((model, index) => (
                    <th
                      key={`model-${model.name}`}
                      className={`px-2 pt-4 pb-1 ${
                        index === 0 ? 'rounded-t-xl bg-blue-50 text-blue-500' : ''
                      }`}
                    >
                      {model.name}
                    </th>
                  ))}
                </tr>
                <tr className="text-slate-400">
                  <th className="px-2 pt-1.5 pb-3"></th>
                  {models.map((model, index) => (
                    <th
                      key={`version-${model.version}`}
                      className={`px-2 pt-1.5 pb-3 ${
                        index === 0 ? 'bg-blue-50 font-bold text-blue-500' : 'font-normal'
                      }`}
                    >
                      {model.version}
                    </th>
                  ))}
                </tr>
                <tr>
                  <td className="pt-0.5"></td>
                  <td className="pt-0.5"></td>
                  <td className="bg-blue-50 pt-0.5 font-bold text-blue-500"></td>
                  <td className="pt-0.5"></td>
                  <td className="pt-0.5"></td>
                  <td className="pt-0.5"></td>
                  <td className="pt-0.5"></td>
                  <td className="pt-0.5"></td>
                </tr>

                {architectureRows.map(row => (
                  <React.Fragment key={uuidv4()}>
                    <tr>
                      <td className="px-2 py-2.5"></td>
                      <td className="px-2 py-2.5 text-center">{row.metric}</td>
                      {row.values.map((cell, index) => (
                        <td
                          key={uuidv4()}
                          className={`px-2 py-2.5 text-center ${
                            index === 0 ? 'bg-blue-50 text-blue-500' : ''
                          }`}
                        >
                          {cell.value}
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <td className="pt-0.5"></td>
                      <td className="pt-0.5"></td>
                      <td className="bg-blue-50 pt-0.5 font-bold text-blue-500"></td>
                      <td className="pt-0.5"></td>
                      <td className="pt-0.5"></td>
                      <td className="pt-0.5"></td>
                      <td className="pt-0.5"></td>
                      <td className="pt-0.5"></td>
                    </tr>
                  </React.Fragment>
                ))}

                {Object.entries(
                  metricRows.reduce(
                    (acc, row) => {
                      if (row.category) {
                        if (!acc[row.category]) {
                          acc[row.category] = [];
                        }
                        acc[row.category].push(row);
                      }
                      return acc;
                    },
                    {} as Record<string, typeof metricRows>,
                  ),
                ).map(([category, rows]) => (
                  <React.Fragment key={uuidv4()}>
                    <tr className="border-t-1">
                      <td className="px-2 py-3 font-bold" rowSpan={rows.length}>
                        {category}
                      </td>
                      {rows.map((row, rowIndex) => (
                        <React.Fragment key={uuidv4()}>
                          {rowIndex === 0 && (
                            <>
                              <td className="px-2 py-3 text-center">{row.metric}</td>
                              {row.values.map((cell, cellIndex) => (
                                <td
                                  key={uuidv4()}
                                  className={`px-2 py-3 text-center ${
                                    cellIndex === 0 ? 'bg-blue-50 text-blue-500' : ''
                                  } ${cell.isBold ? 'font-bold' : ''}`}
                                >
                                  {cell.value}
                                </td>
                              ))}
                            </>
                          )}
                        </React.Fragment>
                      ))}
                    </tr>
                    {rows.slice(1).map(row => (
                      <tr key={uuidv4()}>
                        <td className="px-2 py-3 text-center">{row.metric}</td>
                        {row.values.map((cell, cellIndex) => (
                          <td
                            key={uuidv4()}
                            className={`px-2 py-3 text-center ${
                              cellIndex === 0 ? 'bg-blue-50 text-blue-500' : ''
                            } ${cell.isBold ? 'font-bold' : ''}`}
                          >
                            {cell.value}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CapabilitiesSection;
