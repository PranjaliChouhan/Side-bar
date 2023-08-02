import { RiVipDiamondFill, RiBarChart2Fill, RiShoppingCartFill, RiGlobalFill, RiPaintBrushFill } from 'react-icons/ri'
 
 export const menuItems = [
    {
      title: 'Components',
      icon: <RiVipDiamondFill/>,
      badge: 'Hot',
      submenu: [
        { title: 'Grid' },
        { title: 'Layout' },
        {
          title: 'Forms',
          submenu: [
            { title: 'Input' },
            { title: 'Select' },
            {
              title: 'More',
              submenu: [
                { title: 'CheckBox' },
                { title: 'Radio' },
                {
                  title: 'Want more ?',
                  suffix: '\u{1F914}',
                  submenu: [{ title: 'You made it' }],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      title: 'Charts',
      icon: <RiBarChart2Fill/>,
      submenu: [
        { title: 'Pie chart' },
        { title: 'Line chart' },
        { title: 'Bar chart' },
      ],
    },
    {
      title: 'E-commerce',
      icon: <RiShoppingCartFill/>,
      submenu: [
        { title: 'Products' },
        { title: 'Orders' },
        { title: 'credit card' },
      ],
    },
    {
      title: 'Maps',
      icon: <RiGlobalFill/>,
      submenu: [
        { title: 'Google maps' },
        { title: 'Open street map' },
      ],
    },
    {
      title: 'Theme',
      icon:<RiPaintBrushFill/>,
      submenu: [
        { title: 'Dark' },
        { title: 'Light' },
      ],
    },
    
  ];
  