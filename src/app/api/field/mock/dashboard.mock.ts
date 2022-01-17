
export const dashboard = [
  {
    id: 'analysis',
    fields: [
      {
        type: 'card-small',
        key: 'name',
        className: "col-md-3 col-sm-6 d-inline-block",
        wrappers: ['inline'],
        templateOptions: {
          label: "总销售额",
          tooltip: '指标说明',
        }
      },
      {
        type: 'card-small',
        key: 'name',
        className: "col-md-3 col-sm-6  d-inline-block",
        wrappers: ['inline'],
        templateOptions: {
          label: "总销售额",
          tooltip: '指标说明',
        }
      },
      {
        type: 'card-small',
        key: 'name',
        className: "col-md-3 col-sm-6 d-inline-block",
        wrappers: ['inline'],
        templateOptions: {
          label: "总销售额",
          tooltip: '指标说明',
        }
      },
      {
        type: 'card-small',
        key: 'name',
        className: "col-md-3 col-sm-6 d-inline-block",
        wrappers: ['inline'],
        templateOptions: {
          label: "总销售额",
          tooltip: '指标说明',
        }
      },
    ],
    info: {
      title: '分析页1',
      content: '分析页用于统计系统数据, 分析系统动态'
    }
  },
  {
    id: 'monitor',
    fields: [
      {
        id: 'dashboard',
        type: 'steps',
        key: 'name',
        className: "w-50 d-block",
        wrappers: ['inline'],
        templateOptions: {
          label: "姓名1",
          required: true,
          placeholder: '姓名2',
          readonly: true,
          nzShowArrow: false,
          status: 'wait',
          configOptions: [
            {
              label: 'Finished',
              description: 'This is a description.',
              subtitle: 'nzSubtitle'
            },
            {
              label: 'In Progress',
              description: 'This is a description.'
            },
            {
              label: 'Waiting',
              description: 'This is a description.'
            },
          ]
        }
      },
    ],
    info: {
      title: '监控页',
      content: '表单页用于向用户收集或验证信息，基础表单常见于数据项较少的表单场景2。'
    }
  },
  {
    id: 'workplace',
    fields: [
      {
        id: 'dashboard',
        type: 'steps',
        key: 'name',
        className: "w-50 d-block",
        wrappers: ['inline'],
        templateOptions: {
          label: "姓名1",
          required: true,
          placeholder: '姓名2',
          readonly: true,
          nzShowArrow: false,
          status: 'wait',
          configOptions: [
            {
              label: 'Finished',
              description: 'This is a description.',
              subtitle: 'nzSubtitle'
            },
            {
              label: 'In Progress',
              description: 'This is a description.'
            },
            {
              label: 'Waiting',
              description: 'This is a description.'
            },
          ]
        }
      },
    ],
    info: {
      title: '工作台',
      content: '工作台用于'
    }
  }
]