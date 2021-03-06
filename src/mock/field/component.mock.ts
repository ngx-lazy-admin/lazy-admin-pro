import {
  AutocompleteMockFields,
  ButtonMockFields,
  CardMockFields,
  CascaderMockFields,
  CheckboxMockFields,
  DatePickerMockFields,
  InputNumberMockFields,
  InputMockFields,
  MentionMockFields,
  RadioMockFields,
  RateMockFields,
  RepeatMockFields,
  SelectMockFields,
  SliderMockFields,
  StepsMockFields,
  SwitchMockFields,
  TableMockFields,
  TimePickerMockFields,
  TransferMockFields,
  TreeSelectMockFields,
  UploadMockFields,
  ModalMockFields,
  TagMockFields,
  PaginationMockFields,
  BadgeMockFields,
  CollapseMockFields,
  DescriptionMockFields,
  ListMockFields
} from './components'
import { SegmentedMockFields } from './components/segmented.mock'
import { StatisticMockFields } from './components/statistic.mock'
import { TabsMockFields } from './components/tabs.mock'
import { TypographyMockFields } from './components/typography.mock'


const list10 = [...Array(10).keys()].map((item, index) => {
  return {
    id: index,
    key: index,
    name: '🐛 [BUG ' + index + ']无法创建工程npm create umi',
    age: index % 100,
    address: 'JNew York No. 1 Lake Park',
  }
})

export const components = [
  {
    id: 'autocomplete',
    fields: AutocompleteMockFields,
    info: {
      title: 'Autocomplete自动完成',
      content: '输入框自动完成功能。'
    }
  },
  {
    id: 'button',
    fields: ButtonMockFields,
    info: {
      title: 'Button 按钮',
      content: '按钮用于开始一个即时操作。'
    }
  },
  {
    id: 'badge',
    fields: BadgeMockFields,
    info: {
      title: 'Badge徽标数',
      content: '图标右上角的圆形徽标数字。'
    }
  },
  {
    id: 'card',
    fields: CardMockFields,
    info: {
      title: 'Card卡片',
      content: '通用卡片容器。'
    }
  },
  {
    id: 'cascader',
    fields: CascaderMockFields,
    info: {
      title: 'Cascader级联选择',
      content: '级联选择框。'
    }
  },
  {
    id: 'checkbox',
    fields: CheckboxMockFields,
    info: {
      title: 'Checkbox多选框',
      content: '多选框。'
    }
  },
  {
    id: 'date-picker',
    fields: DatePickerMockFields,
    data: {},
    info: {
      title: 'DatePicker日期选择框',
      content: '输入或选择日期的控件'
    }
  },
  {
    id: 'input',
    fields: InputMockFields,
    data: {},
    info: {
      title: 'Input输入框',
      content: '通过鼠标或键盘输入内容，是最基础的表单域的包装。'
    }
  },
  {
    id: 'input-number',
    fields: InputNumberMockFields,
    data: {},
    info: {
      title: 'InputNumber数字输入框',
      content: '通过鼠标或键盘，输入范围内的数值。'
    }
  },
  {
    id: 'mention',
    fields: MentionMockFields,
    data: {},
    info: {
      title: 'Mention提及',
      content: '提及组件。'
    }
  },
  {
    id: 'radio',
    fields: RadioMockFields,
    data: {},
    info: {
      title: 'Radio单选框',
      content: '单选框。'
    }
  },
  {
    id: 'rate',
    fields: RateMockFields,
    data: {},
    info: {
      title: 'Rate评分',
      content: '评分组件。'
    }
  },
  {
    id: 'select',
    fields: SelectMockFields,
    data: {},
    info: {
      title: 'Select选择器',
      content: '下拉选择器。'
    }
  },
  {
    id: 'slider',
    fields: SliderMockFields,
    data: {},
    info: {
      title: 'Slider滑动输入条',
      content: '滑动型输入器，展示当前值和可选范围。'
    }
  },
  {
    id: 'steps',
    fields: StepsMockFields,
    data: {},
    info: {
      title: 'InputNumber数字输入框',
      content: '通过鼠标或键盘，输入范围内的数值。'
    }
  },
  {
    id: 'switch',
    fields: SwitchMockFields,
    data: {},
    info: {
      title: 'Switch开关',
      content: '开关选择器。'
    }
  },
  {
    id: 'time-picker',
    fields: TimePickerMockFields,
    data: {},
    info: {
      title: 'TimePicker时间选择框',
      content: '输入或选择时间的控件。'
    }
  },
  {
    id: 'transfer',
    fields: TransferMockFields,
    data: {},
    info: {
      title: 'Transfer穿梭框',
      content: '双栏穿梭选择框。'
    }
  },
  {
    id: 'tree-select',
    fields: TreeSelectMockFields,
    data: {},
    info: {
      title: 'TreeSelect树选择',
      content: '树型选择控件。'
    }
  },
  {
    id: 'upload',
    fields: UploadMockFields,
    data: {},
    info: {
      title: 'Upload上传',
      content: '文件选择上传和拖拽上传控件。'
    }
  },
  {
    id: 'table',
    fields: TableMockFields,
    data: {
      list: list10
    },

    info: {
      title: 'Table表格',
      content: '展示行列数据。'
    }
  },
  {
    id: 'repeat',
    fields: RepeatMockFields,
    data: {
      list: list10
    },

    info: {
      title: 'Table表格',
      content: '展示行列数据。'
    }
  },
  {
    id: 'modal',
    fields: ModalMockFields,
    data: {

    },
    info: {
      title: 'Modal对话框',
      content: '模态对话框。'
    }
  },
  {
    id: 'tag',
    fields: TagMockFields,
    data: {

    },
    info: {
      title: 'Tag标签',
      content: '进行标记和分类的小标签。'
    }
  },
  {
    id: 'pagination',
    fields: PaginationMockFields,
    data: {
      pagination: {
        pageIndex: 3,
        pageSize: 20,
        total: 100
      },
      pagination1: {
        pageIndex: 3,
        pageSize: 20,
        total: 500
      }
    },
    info: {
      title: 'Pagination分页',
      content: '采用分页的形式分隔长列表，每次只加载一个页面。'
    }
  },
  {
    id: 'collapse',
    fields: CollapseMockFields,
    data: {
      'collapse-1-1-1': [
        {
          active: true,
          header: 'This is panel header 1',
          disabled: false,
          children: [{
            article: `A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome
            guest in many households across the world.`
          }]
        },
        {
          active: false,
          disabled: false,
          header: 'This is panel header 2'
        },
        {
          active: false,
          disabled: true,
          header: 'This is panel header 3'
        }
      ],
    },
    info: {
      title: 'Collapse 折叠面板',
      content: '可以折叠/展开的内容区域。'
    }
  },
  {
    id: 'descriptions',
    fields: DescriptionMockFields,
    data: {
      'descriptions-1-1-1': {
        username: 'Zhou Maomao',
        telephone: '18100000000',
        live: 'Hangzhou, Zhejiang',
        remark: 'Empty',
        address: 'No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China',
      }
    },
    info: {
      title: 'Descriptions描述列表',
      content: '成组显示多个只读字段。'
    }
  }, 
  {
    id: 'list',
    fields: ListMockFields,
    data: {
      'list-1-1-1': list10
    },
    info: {
      title: 'List列表',
      content: '通用列表。'
    }
  },
  {
    id: 'statistic',
    fields: StatisticMockFields,
    data: {
      'list-1-1-1': list10
    },
    info: {
      title: 'Statistic统计',
      content: '展示统计数字。'
    }
  },
  {
    id: 'typography',
    fields: TypographyMockFields,
    data: {

    },
    info: {
      title: 'Typography排版',
      content: '文本的基本格式。'
    }
  },
  {
    id: 'segmented',
    fields: SegmentedMockFields,
    data: {

    },
    info: {
      title: 'Segmented分段控制器',
      content: `#### 何时使用
- 用于展示多个选项并允许用户选择其中单个选项；
- 当切换选中选项时，关联区域的内容会发生变化。
      `
    }
  },
  {
    id: 'tabs',
    fields: TabsMockFields,
    data: [

    ],
    info: {
      title: 'Tabs标签页',
      content: `选项卡切换组件。
#### 何时使用
提供平级的区域将大块内容进行收纳和展现，保持界面整洁。

Ant Design 依次提供了三级选项卡，分别用于不同的场景。

- 卡片式的页签，提供可关闭的样式，常用于容器顶部。
- 标准线条式页签，用于容器内部的主功能切换，这是最常用的 Tabs。
- RadioButton 可作为更次级的页签来使用。
      `
    }
  }

  
]
