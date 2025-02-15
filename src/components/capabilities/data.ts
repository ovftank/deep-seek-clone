export interface ModelInfo {
  name: string;
  version: string;
}

export interface MetricRow {
  category?: string;
  metric: string;
  values: {
    value: string;
    isBold?: boolean;
    isHighlighted?: boolean;
  }[];
}

export const models: ModelInfo[] = [
  { name: 'DeepSeek V3', version: '' },
  { name: 'DeepSeek V2.5', version: '0905' },
  { name: 'Qwen2.5', version: '72B-Inst' },
  { name: 'Llama3.1', version: '405B-Inst' },
  { name: 'Claude-3.5', version: 'Sonnet-1022' },
  { name: 'GPT-4', version: '0513' },
];

export const architectureRows: MetricRow[] = [
  {
    metric: 'Architecture',
    values: [
      { value: 'MoE', isHighlighted: true },
      { value: 'MoE' },
      { value: 'Dense' },
      { value: 'Dense' },
      { value: '-' },
      { value: '-' },
    ],
  },
  {
    metric: '# Activated Params',
    values: [
      { value: '37B', isHighlighted: true },
      { value: '21B' },
      { value: '72B' },
      { value: '405B' },
      { value: '-' },
      { value: '-' },
    ],
  },
  {
    metric: '# Total Params',
    values: [
      { value: '671B', isHighlighted: true },
      { value: '236B' },
      { value: '72B' },
      { value: '405B' },
      { value: '-' },
      { value: '-' },
    ],
  },
];

export const metricRows: MetricRow[] = [
  {
    category: 'English',
    metric: 'MMLU (EM)',
    values: [
      { value: '88.5', isHighlighted: true },
      { value: '80.6' },
      { value: '85.3' },
      { value: '88.6', isBold: true },
      { value: '88.3' },
      { value: '87.2' },
    ],
  },
  {
    category: 'English',
    metric: 'MMLU-Redux (EM)',
    values: [
      { value: '89.1', isHighlighted: true },
      { value: '80.3' },
      { value: '85.6' },
      { value: '86.2' },
      { value: '88.9' },
      { value: '88.0' },
    ],
  },
  {
    category: 'English',
    metric: 'MMLU-Pro (EM)',
    values: [
      { value: '75.9', isHighlighted: true },
      { value: '66.2' },
      { value: '71.6' },
      { value: '73.3' },
      { value: '78.0', isBold: true },
      { value: '72.6' },
    ],
  },
  {
    category: 'English',
    metric: 'TruthfulQA (MC2)',
    values: [
      { value: '62.3', isHighlighted: true },
      { value: '58.1' },
      { value: '59.7' },
      { value: '61.2', isBold: true },
      { value: '60.8' },
      { value: '59.9' },
    ],
  },
  {
    category: 'English',
    metric: 'BBH (EM)',
    values: [
      { value: '75.4', isHighlighted: true },
      { value: '70.2' },
      { value: '72.8' },
      { value: '74.9', isBold: true },
      { value: '74.1' },
      { value: '73.6' },
    ],
  },
  {
    category: 'English',
    metric: 'GSM8K (EM)',
    values: [
      { value: '84.7', isHighlighted: true },
      { value: '78.3' },
      { value: '81.5' },
      { value: '83.9', isBold: true },
      { value: '83.2' },
      { value: '82.7' },
    ],
  },
  {
    category: 'Code',
    metric: 'HumanEval-Mul (Pass@1)',
    values: [
      { value: '82.6', isHighlighted: true },
      { value: '77.4' },
      { value: '77.3' },
      { value: '77.2', isBold: true },
      { value: '81.7' },
      { value: '80.5' },
    ],
  },
  {
    category: 'Code',
    metric: 'MBPP (Pass@1)',
    values: [
      { value: '65.8', isHighlighted: true },
      { value: '60.2' },
      { value: '62.9' },
      { value: '64.7', isBold: true },
      { value: '64.1' },
      { value: '63.5' },
    ],
  },
  {
    category: 'Code',
    metric: 'CodeContest (Pass@1)',
    values: [
      { value: '71.3', isHighlighted: true },
      { value: '66.8' },
      { value: '68.9' },
      { value: '70.5', isBold: true },
      { value: '69.8' },
      { value: '69.2' },
    ],
  },
  {
    category: 'Math',
    metric: 'AIME 2024 (Pass@1)',
    values: [
      { value: '39.2', isHighlighted: true },
      { value: '16.7' },
      { value: '23.3' },
      { value: '23.3', isBold: true },
      { value: '16.0' },
      { value: '9.3' },
    ],
  },
  {
    category: 'Math',
    metric: 'Math QA (EM)',
    values: [
      { value: '78.9', isHighlighted: true },
      { value: '73.5' },
      { value: '75.8' },
      { value: '77.6', isBold: true },
      { value: '77.0' },
      { value: '76.4' },
    ],
  },
  {
    category: 'Math',
    metric: 'MATH (EM)',
    values: [
      { value: '45.6', isHighlighted: true },
      { value: '40.2' },
      { value: '42.5' },
      { value: '44.3', isBold: true },
      { value: '43.7' },
      { value: '43.1' },
    ],
  },
  {
    category: 'Chinese',
    metric: 'CLUEWSC (EM)',
    values: [
      { value: '90.9', isHighlighted: true },
      { value: '90.4' },
      { value: '91.4' },
      { value: '84.7', isBold: true },
      { value: '85.4' },
      { value: '87.9' },
    ],
  },
  {
    category: 'Chinese',
    metric: 'C-Eval (EM)',
    values: [
      { value: '82.1', isHighlighted: true },
      { value: '76.7' },
      { value: '79.0' },
      { value: '81.3', isBold: true },
      { value: '80.6' },
      { value: '80.0' },
    ],
  },
  {
    category: 'Chinese',
    metric: 'CMMLU (EM)',
    values: [
      { value: '83.4', isHighlighted: true },
      { value: '78.0' },
      { value: '80.3' },
      { value: '82.6', isBold: true },
      { value: '81.9' },
      { value: '81.3' },
    ],
  },
  {
    category: 'Chinese',
    metric: 'C-SimpleQA (Correct)',
    values: [
      { value: '64.1', isHighlighted: true, isBold: true },
      { value: '54.1' },
      { value: '48.4' },
      { value: '50.4' },
      { value: '51.3' },
      { value: '59.3' },
    ],
  },
];
