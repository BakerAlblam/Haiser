import {
    SfIconContactSupport,
    SfIconFacebook,
    SfIconHelp,
    SfIconInstagram,
    SfIconCall,
    SfIconPinterest,
    SfIconTwitter,
    SfIconYoutube,
    SfButton,
    SfLink,
    SfListItem,
  } from '@storefront-ui/react';



  
  const categories = [
    {
      label: 'How to buy',
      subcategories: [
        {
          subcategoryLabel: 'Payment methods',
          link: '#',
        },
        {
          subcategoryLabel: 'Order pickup',
          link: '#',
        },
        {
          subcategoryLabel: 'Purchase status',
          link: '#',
        },
        {
          subcategoryLabel: 'Track orders',
          link: '#',
        },
        {
          subcategoryLabel: 'Returns',
          link: '#',
        },
      ],
    },
    {
      label: 'Help',
      subcategories: [
        {
          subcategoryLabel: 'Help centers',
          link: '#',
        },
        {
          subcategoryLabel: 'Security & fraud',
          link: '#',
        },
        {
          subcategoryLabel: 'Feedback',
          link: '#',
        },
        {
          subcategoryLabel: 'Contact',
          link: '#',
        },
      ],
    },
    {
      label: 'Services',
      subcategories: [
        {
          subcategoryLabel: 'Gift cards',
          link: '#',
        },
        {
          subcategoryLabel: 'Order pickup',
          link: '#',
        },
        {
          subcategoryLabel: 'Purchase status',
          link: '#',
        },
        {
          subcategoryLabel: 'Track orders',
          link: '#',
        },
      ],
    },
    {
      label: 'About',
      subcategories: [
        {
          subcategoryLabel: 'About us',
          link: '#',
        },
        {
          subcategoryLabel: 'Order pickup',
          link: '#',
        },
        {
          subcategoryLabel: 'Purchase status',
          link: '#',
        },
        {
          subcategoryLabel: 'Track orders',
          link: '#',
        },
        {
          subcategoryLabel: 'Returns',
          link: '#',
        },
      ],
    },
  ];
  const socialMedia = [
    {
      label: 'Facebook',
      link: '#',
      icon: () => <SfIconFacebook />,
    },
    {
      label: 'Twitter',
      link: '#',
      icon: () => <SfIconTwitter />,
    },
    {
      label: 'Instagram',
      link: '#',
      icon: () => <SfIconInstagram />,
    },
    {
      label: 'Pinterest',
      link: '#',
      icon: () => <SfIconPinterest />,
    },
    {
      label: 'Youtube',
      link: '#',
      icon: () => <SfIconYoutube />,
    },
  ];
  
  const bottomLinks = [
    {
      label: 'Terms',
      link: '#',
    },
    {
      label: 'Privacy policy',
      link: '#',
    },
  ];
  export default function FooterBasic() {
    return (
      <footer className="pt-10 bg-neutral-100 w-full">
        <div className="grid justify-center grid-cols-[1fr_1fr] md:grid-cols-[repeat(4,1fr)] px-4 md:px-6 pb-10 max-w-[1536px] mx-auto">
          {categories.map(({ label, subcategories }) => (
            <ul className="grid grid-cols xs:pb-4" key={label}>
              <li className="ml-4 text-lg font-medium leading-7 text-neutral-900 font-body">{label}</li>
              {subcategories?.map(({ subcategoryLabel, link }) => (
                <SfListItem className="py-2 !bg-transparent typography-text-sm font-body" key={subcategoryLabel}>
                  <SfLink
                    className="no-underline text-neutral-600 hover:underline hover:!text-neutral-900 active:underline active:!text-neutral-900"
                    variant="secondary"
                    href={link}
                  >
                    {subcategoryLabel}
                  </SfLink>
                </SfListItem>
              ))}
            </ul>
          ))}
        </div>
        <hr />
        
        <div className="bg-neutral-900 justify-end px-4 py-10 md:flex md:py-6 max-w-[1536px] mx-auto">
          <div className="flex justify-center py-2 gap-x-4 md:self-start">
            {socialMedia.map(({ icon: Icon, label, link }) => (
              <SfButton
                key={label}
                square
                as="a"
                variant="tertiary"
                className="text-white active:text-white hover:text-white hover:!bg-neutral-500 active:bg-transparent"
                href={link}
                aria-label={`Go to ${label} page`}
              >
                <Icon />
              </SfButton>
            ))}
          </div>
          <div className="flex items-center justify-center gap-6 py-2 my-4 md:ml-auto md:my-0">
            {bottomLinks.map(({ label, link }) => (
              <SfLink
                key={label}
                variant="secondary"
                className="text-white no-underline typography-text-sm active:text-white active:underline hover:text-white hover:underline"
                href={link}
              >
                {label}
              </SfLink>
            ))}
          </div>
         
        </div>
      </footer>
    );
  }
  
