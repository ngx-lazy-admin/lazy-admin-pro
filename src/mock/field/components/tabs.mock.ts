import { FieldType, FormlyFieldConfig } from '@ngx-formly/core';

export const TabsMockFields = [
  {
    type: 'code-card',
    className: "d-block mb-3 col-12",
    templateOptions: {
      title: '基本',
      description: '默认选中第一项',
    },
    fieldGroup: [
      {
        key: 'input1-1',
        type: 'tabs',
        className: "d-block mb-2",
        defaultValue: 3,
        templateOptions: {
          placeholder: 'Basic usage'
        },
        fieldGroup: [
          {
            key: 'inner-text-1',
            type: 'text',
            className: "d-block mb-2",
            defaultValue: 'Content of Tab Panel',
            templateOptions: {
              title: 'Tab1',

            }
          },
          {
            key: 'inner-text-2',
            type: 'text',
            className: "d-block mb-2",
            defaultValue: 'Content of Tab Pane2',
            templateOptions: {
              title: 'Tab2',

            }
          },              {
            key: 'inner-text-3',
            type: 'text',
            className: "d-block mb-2",
            defaultValue: 'Content of Tab Pane3',
            templateOptions: {
              title: 'Tab3',

            }
          },
        ]
      }
    ]
  },
  {
    type: 'code-card',
    className: "d-block mb-3 col-12",
    templateOptions: {
      title: '禁用',
      description: '禁用某一项',
    },
    fieldGroup: [
      {
        key: 'input1-1',
        type: 'tabs',
        className: "d-block mb-2",
        defaultValue: 3,
        templateOptions: {
          placeholder: 'Basic usage'
        },
        fieldGroup: [
          {
            key: 'inner-text-1',
            type: 'text',
            className: "d-block mb-2",
            defaultValue: 'Content of Tab Panel',
            templateOptions: {
              title: 'Tab1',

            }
          },
          {
            key: 'inner-text-2',
            type: 'text',
            className: "d-block mb-2",
            defaultValue: 'Content of Tab Pane2',
            templateOptions: {
              title: 'Tab2',
              
              disabled: true
            }
          },              {
            key: 'inner-text-3',
            type: 'text',
            className: "d-block mb-2",
            defaultValue: 'Content of Tab Pane3',
            templateOptions: {
              title: 'Tab3',

            }
          },
        ]
      }

    ]
  },
  {
    type: 'code-card',
    className: "d-block mb-3 col-12",
    templateOptions: {
      title: '居中',
      description: '标签居中展示。',
    },
    fieldGroup: [
      {
        key: 'input1-1',
        type: 'tabs',
        className: "d-block mb-2",
        defaultValue: 3,
        templateOptions: {
          
          center: true
        },
        fieldGroup: [
          {
            key: 'inner-text-1',
            type: 'text',
            className: "d-block mb-2",
            defaultValue: 'Content of Tab Panel',
            templateOptions: {
              title: 'Tab1'  
            }
          },
          {
            key: 'inner-text-2',
            type: 'text',
            className: "d-block mb-2",
            defaultValue: 'Content of Tab Pane2',
            templateOptions: {
              title: 'Tab2',
              disabled: true
            }
          },              {
            key: 'inner-text-3',
            type: 'text',
            className: "d-block mb-2",
            defaultValue: 'Content of Tab Pane3',
            templateOptions: {
              title: 'Tab3',
            }
          },
        ]
      }

    ]
  },
  {
    type: 'code-card',
    className: "d-block mb-3 col-12",
    templateOptions: {
      title: '图标',
      description: '有图标的标签',
    },
    fieldGroup: [
      {
        key: 'tabs-1-1',
        type: 'tabs',
        className: "d-block mb-2",
        defaultValue: 3,
        templateOptions: {
          
          center: true
        },
        fieldGroup: [
          {
            key: 'inner-text-1',
            type: 'text',
            className: "d-block mb-2",
            defaultValue: 'Content of Tab Panel',
            templateOptions: {
              titleRef: {
                type: 'icon',
                icon: 'apple',
                text: 'Tab 1'
              }  
            }
          },
          {
            key: 'inner-text-3',
            type: 'text',
            className: "d-block mb-2",
            defaultValue: 'Content of Tab Pane3',
            templateOptions: {
              titleRef: {
                type: 'icon',
                icon: 'android',
                text: 'Tab 2'
              }  
            }
          }
        ]
      }

    ]
  },
  {
    type: 'code-card',
    className: "d-block mb-3 col-12",
    templateOptions: {
      title: '附加内容',
      description: '可以在页签右边添加附加操作。',
    },
    fieldGroup: [
      {
        key: 'tabs-1-1',
        type: 'tabs',
        className: "d-block mb-2",
        defaultValue: 3,
        templateOptions: {
          extraRef: {
            type: 'button',
            text: 'Extra Action',
            click: `(field, $event) => {
              console.log(field)
              console.log($event)
            }`
          }
        },
        fieldGroup: [
          {
            key: 'inner-text-1',
            type: 'text',
            className: "d-block mb-2",
            defaultValue: 'Content of tab 1',
            templateOptions: {
              title: 'Tab 1'
            }
          },
          {
            key: 'inner-text-3',
            type: 'text',
            className: "d-block mb-2",
            defaultValue: 'Content of tab 2',
            templateOptions: {
              title: 'Tab 2'
            }
          },
          {
            key: 'inner-text-3',
            type: 'text',
            className: "d-block mb-2",
            defaultValue: 'Content of tab 3',
            templateOptions: {
              title: 'Tab 3'
            }
          }
        ]
      }
    ]
  },
  {
    type: 'code-card',
    className: "d-block mb-3 col-12",
    templateOptions: {
      title: '日期格式',
      description: '最简单的用法，在浮层中可以选择或者输入日期。',
    },
    fieldGroup: [
      {
        key: 'checked2',
        type: 'checkbox',
        className: "d-inline-block mx-2",
        templateOptions: {
          text: "Checkbox",
        }
      },
      {
        key: 'checked1',
        type: 'checkbox',
        className: "d-inline-block mx-2",
        templateOptions: {
          text: "nzDisabled",
          
        }
      }
    ]
  },
]