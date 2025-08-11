export interface PropertyData {
  readonly id: string;
  readonly title: string;
  readonly price: number;
  readonly rating: number;
  readonly image: string;
  readonly href: string;
  readonly hasGuestFavorite: boolean;
}

export interface PropertyCarouselData {
  readonly id: string;
  readonly title: string;
  readonly ariaLabel: string;
  readonly href: string;
  readonly properties: PropertyData[];
}

export const propertyCarousels: PropertyCarouselData[] = [
  {
    id: 'seattle',
    title: 'Popular homes in Seattle',
    ariaLabel: 'Popular homes in Seattle',
    href: '/s/Seattle/homes?place_id=ChIJVTPokywQkFQRmtVEaUZlJRA&refinement_paths%5B%5D=%2Fhomes&flexible_trip_lengths%5B%5D=weekend_trip&date_picker_type=FLEXIBLE_DATES&search_type=HOMEPAGE_CAROUSEL_CLICK',
    properties: [
      {
        id: 'seattle-1',
        title: 'Apartment in Phinney Ridge',
        price: 231,
        rating: 4.96,
        image: "https://c.animaapp.com/me7emf7wZc0xCu/assets/87.jpg",
        href: '/rooms/12929985?check_in=2025-12-05&check_out=2025-12-07&photo_id=1913471199&source_impression_id=p3_1754934405_P3PPyPISyRId1A4m&previous_page_section_name=1000',
        hasGuestFavorite: true
      },
      {
        id: 'seattle-2',
        title: 'Room in Fremont',
        price: 165,
        rating: 5.0,
        image: "https://c.animaapp.com/me7emf7wZc0xCu/assets/85.jpg",
        href: '/rooms/1355485031727555412?check_in=2025-10-31&check_out=2025-11-02&photo_id=2088292911&source_impression_id=p3_1754934405_P3-y6ovkZlPOLkxb&previous_page_section_name=1000',
        hasGuestFavorite: true
      },
      {
        id: 'seattle-3',
        title: 'Place to stay in Beacon Hill',
        price: 183,
        rating: 4.95,
        image: "https://c.animaapp.com/me7emf7wZc0xCu/assets/86.jpg",
        href: '/rooms/952465687930263075?check_in=2025-12-12&check_out=2025-12-14&photo_id=1714268145&source_impression_id=p3_1754934405_P3FeervA5q2PLei7&previous_page_section_name=1000',
        hasGuestFavorite: true
      },
      {
        id: 'seattle-4',
        title: 'Guest suite in Fremont',
        price: 366,
        rating: 4.97,
        image: "https://c.animaapp.com/me7emf7wZc0xCu/assets/88.jpg",
        href: '/rooms/9217030?check_in=2025-11-07&check_out=2025-11-09&photo_id=1573259377&source_impression_id=p3_1754934405_P3oOd3sTob50wjq_&previous_page_section_name=1000',
        hasGuestFavorite: true
      },
      {
        id: 'seattle-5',
        title: 'Apartment in Phinney Ridge',
        price: 248,
        rating: 4.98,
        image: "https://c.animaapp.com/me7emf7wZc0xCu/assets/89.jpg",
        href: '/rooms/18414350?check_in=2025-11-07&check_out=2025-11-09&photo_id=300229483&source_impression_id=p3_1754934405_P3-elIvcO1fMWYfH&previous_page_section_name=1000',
        hasGuestFavorite: true
      },
      {
        id: 'seattle-6',
        title: 'Guest suite in Central District',
        price: 290,
        rating: 4.99,
        image: "https://c.animaapp.com/me7emf7wZc0xCu/assets/91.jpg",
        href: '/rooms/1141408439168485496?check_in=2026-03-06&check_out=2026-03-08&photo_id=1953648412&source_impression_id=p3_1754934405_P3xj7_tKvjvbQJxy&previous_page_section_name=1000',
        hasGuestFavorite: true
      },
      {
        id: 'seattle-7',
        title: 'Tiny home in Queen Anne',
        price: 272,
        rating: 4.91,
        image: "https://c.animaapp.com/me7emf7wZc0xCu/assets/92.jpg",
        href: '/rooms/823397637387074025?check_in=2025-10-24&check_out=2025-10-26&photo_id=1602930327&source_impression_id=p3_1754934405_P3M_uQru58_t_LIj&previous_page_section_name=1000',
        hasGuestFavorite: true
      },
      {
        id: 'seattle-8',
        title: 'Room in Roosevelt',
        price: 164,
        rating: 4.95,
        image: "https://c.animaapp.com/me7emf7wZc0xCu/assets/93.jpg",
        href: '/rooms/48447536?check_in=2025-11-07&check_out=2025-11-09&photo_id=1609614934&source_impression_id=p3_1754934405_P3fC1rpxiTjRbqQr&previous_page_section_name=1000',
        hasGuestFavorite: true
      }
    ]
  },
  {
    id: 'portland',
    title: 'Available in Portland this weekend',
    ariaLabel: 'Available in Portland this weekend',
    href: '/s/Portland/homes?place_id=ChIJJ3SpfQsLlVQRkYXR9ua5Nhw&refinement_paths%5B%5D=%2Fhomes&date_picker_type=CALENDAR&checkin=2025-08-15&checkout=2025-08-17&search_type=HOMEPAGE_CAROUSEL_CLICK',
    properties: [
      {
        id: 'portland-1',
        title: 'Room in Portland',
        price: 145,
        rating: 4.94,
        image: "https://c.animaapp.com/me7emf7wZc0xCu/assets/94.jpg",
        href: '/rooms/797393674027734403?check_in=2025-08-15&check_out=2025-08-17&photo_id=1558880291&source_impression_id=p3_1754934405_P3n2dTMi2iw-JBNk&previous_page_section_name=1000',
        hasGuestFavorite: true
      },
      {
        id: 'portland-2',
        title: 'Apartment in Portland',
        price: 320,
        rating: 4.97,
        image: "https://c.animaapp.com/me7emf7wZc0xCu/assets/101.jpg",
        href: '/rooms/43766909?check_in=2025-08-15&check_out=2025-08-17&photo_id=2180283718&source_impression_id=p3_1754934405_P3Qklh-B6p68lrpt&previous_page_section_name=1000',
        hasGuestFavorite: true
      },
      {
        id: 'portland-3',
        title: 'Room in Portland',
        price: 244,
        rating: 4.86,
        image: "https://c.animaapp.com/me7emf7wZc0xCu/assets/111.jpg",
        href: '/rooms/761722528688946815?check_in=2025-08-15&check_out=2025-08-17&photo_id=1603804596&source_impression_id=p3_1754934405_P3aQqPTCUS2w00GK&previous_page_section_name=1000',
        hasGuestFavorite: true
      },
      {
        id: 'portland-4',
        title: 'Room in Beaverton',
        price: 105,
        rating: 4.94,
        image: "https://c.animaapp.com/me7emf7wZc0xCu/assets/95.jpg",
        href: '/rooms/1043701187496855409?check_in=2025-08-15&check_out=2025-08-17&photo_id=1798634487&source_impression_id=p3_1754934405_P3I5Jw87-8fGYufe&previous_page_section_name=1000',
        hasGuestFavorite: true
      },
      {
        id: 'portland-5',
        title: 'Room in Portland',
        price: 207,
        rating: 5.0,
        image: "https://c.animaapp.com/me7emf7wZc0xCu/assets/96.jpg",
        href: '/rooms/889347365329464731?check_in=2025-08-15&check_out=2025-08-17&photo_id=1658215948&source_impression_id=p3_1754934405_P3XmgvsyhiQ_52Qq&previous_page_section_name=1000',
        hasGuestFavorite: true
      },
      {
        id: 'portland-6',
        title: 'Guest suite in Portland',
        price: 400,
        rating: 4.92,
        image: "https://c.animaapp.com/me7emf7wZc0xCu/assets/97.jpg",
        href: '/rooms/5641892?check_in=2025-08-15&check_out=2025-08-17&photo_id=1096300032&source_impression_id=p3_1754934405_P3mm02-Ikz4Ob5XY&previous_page_section_name=1000',
        hasGuestFavorite: true
      },
      {
        id: 'portland-7',
        title: 'Room in Portland',
        price: 310,
        rating: 5.0,
        image: "https://c.animaapp.com/me7emf7wZc0xCu/assets/98.jpg",
        href: '/rooms/1269661167505123980?check_in=2025-08-15&check_out=2025-08-17&photo_id=2033249944&source_impression_id=p3_1754934405_P3Csns_YJ7jem1iM&previous_page_section_name=1000',
        hasGuestFavorite: true
      },
      {
        id: 'portland-8',
        title: 'Room in Portland',
        price: 194,
        rating: 4.86,
        image: "https://c.animaapp.com/me7emf7wZc0xCu/assets/90.jpg",
        href: '/rooms/34229716?check_in=2025-08-15&check_out=2025-08-17&photo_id=1524944487&source_impression_id=p3_1754934405_P3e5vfbvErM_2xzn&previous_page_section_name=1000',
        hasGuestFavorite: true
      }
    ]
  },
  {
    id: 'boise',
    title: 'Stay in Boise',
    ariaLabel: 'Stay in Boise',
    href: '/s/Boise/homes?place_id=ChIJnbRH6XLxrlQRm51nNpuYW5o&refinement_paths%5B%5D=%2Fhomes&flexible_trip_lengths%5B%5D=weekend_trip&date_picker_type=FLEXIBLE_DATES&search_type=HOMEPAGE_CAROUSEL_CLICK',
    properties: [
      {
        id: 'boise-1',
        title: 'Apartment in Boise',
        price: 217,
        rating: 5.0,
        image: "https://c.animaapp.com/me7emf7wZc0xCu/assets/99.jpg",
        href: '/rooms/1436352531330418339?check_in=2026-01-16&check_out=2026-01-18&photo_id=2213527936&source_impression_id=p3_1754934405_P31q511_qCPTS3m9&previous_page_section_name=1000',
        hasGuestFavorite: true
      },
      {
        id: 'boise-2',
        title: 'Bungalow in North End',
        price: 189,
        rating: 4.95,
        image: "https://c.animaapp.com/me7emf7wZc0xCu/assets/100.jpg",
        href: '/rooms/8257455?check_in=2025-10-24&check_out=2025-10-26&photo_id=1929968206&source_impression_id=p3_1754934405_P3cyrKKJwlvWyEyZ&previous_page_section_name=1000',
        hasGuestFavorite: true
      },
      {
        id: 'boise-3',
        title: 'Guesthouse in North End',
        price: 172,
        rating: 4.98,
        image: "https://c.animaapp.com/me7emf7wZc0xCu/assets/102.jpg",
        href: '/rooms/20175061?check_in=2025-10-31&check_out=2025-11-02&photo_id=1208083237&source_impression_id=p3_1754934405_P39CR_WpksxrZ9DU&previous_page_section_name=1000',
        hasGuestFavorite: true
      },
      {
        id: 'boise-4',
        title: 'Home in Boise',
        price: 232,
        rating: 5.0,
        image: "https://c.animaapp.com/me7emf7wZc0xCu/assets/103.jpg",
        href: '/rooms/23271774?check_in=2025-10-31&check_out=2025-11-02&photo_id=2064331544&source_impression_id=p3_1754934405_P3jlhj4Hcp9bYx25&previous_page_section_name=1000',
        hasGuestFavorite: true
      },
      {
        id: 'boise-5',
        title: 'Home in Boise',
        price: 302,
        rating: 4.99,
        image: "https://c.animaapp.com/me7emf7wZc0xCu/assets/104.jpg",
        href: '/rooms/642170205633822261?check_in=2025-11-14&check_out=2025-11-16&photo_id=1420901180&source_impression_id=p3_1754934405_P3TbI8S9jEgJYVLj&previous_page_section_name=1000',
        hasGuestFavorite: true
      },
      {
        id: 'boise-6',
        title: 'Guesthouse in Boise',
        price: 286,
        rating: 4.99,
        image: "https://c.animaapp.com/me7emf7wZc0xCu/assets/106.jpg",
        href: '/rooms/50363890?check_in=2025-11-07&check_out=2025-11-09&photo_id=1333417913&source_impression_id=p3_1754934405_P3rPCmKUQj_ZBhLY&previous_page_section_name=1000',
        hasGuestFavorite: true
      },
      {
        id: 'boise-7',
        title: 'Tiny home in Boise',
        price: 252,
        rating: 4.92,
        image: "https://c.animaapp.com/me7emf7wZc0xCu/assets/107.jpg",
        href: '/rooms/1101815538654184594?check_in=2025-09-12&check_out=2025-09-14&photo_id=1863391635&source_impression_id=p3_1754934405_P3_ZsKQl_pvpSL9X&previous_page_section_name=1000',
        hasGuestFavorite: true
      },
      {
        id: 'boise-8',
        title: 'Home in Boise',
        price: 320,
        rating: 4.98,
        image: "https://c.animaapp.com/me7emf7wZc0xCu/assets/108.jpg",
        href: '/rooms/1314363109082426637?check_in=2025-11-14&check_out=2025-11-16&photo_id=2051221677&source_impression_id=p3_1754934405_P3KhsGOE1G5p0yVk&previous_page_section_name=1000',
        hasGuestFavorite: true
      }
    ]
  },
  {
    id: 'spokane',
    title: 'Available in Spokane this weekend',
    ariaLabel: 'Available in Spokane this weekend',
    href: '/s/Spokane/homes?place_id=ChIJ5ee7MFwYnlQRsdmEC9bJ_N0&refinement_paths%5B%5D=%2Fhomes&date_picker_type=CALENDAR&checkin=2025-08-15&checkout=2025-08-17&search_type=HOMEPAGE_CAROUSEL_CLICK',
    properties: [
      {
        id: 'spokane-1',
        title: 'Room in Spokane',
        price: 90,
        rating: 4.95,
        image: "https://c.animaapp.com/me7emf7wZc0xCu/assets/109.jpg",
        href: '/rooms/639938645223251564?check_in=2025-08-15&check_out=2025-08-17&photo_id=2116118261&source_impression_id=p3_1754934405_P3a56_I8VevEmIpS&previous_page_section_name=1000',
        hasGuestFavorite: true
      },
      {
        id: 'spokane-2',
        title: 'Apartment in Kendall Yards',
        price: 274,
        rating: 4.93,
        image: "https://c.animaapp.com/me7emf7wZc0xCu/assets/110.jpg",
        href: '/rooms/685542190515285988?check_in=2025-08-15&check_out=2025-08-17&photo_id=1544997775&source_impression_id=p3_1754934405_P3et83PMH9yXXhEU&previous_page_section_name=1000',
        hasGuestFavorite: true
      },
      {
        id: 'spokane-3',
        title: 'Apartment in Spokane',
        price: 268,
        rating: 4.96,
        image: "https://c.animaapp.com/me7emf7wZc0xCu/assets/112.jpg",
        href: '/rooms/932622775567948230?check_in=2025-08-15&check_out=2025-08-17&photo_id=1732841030&source_impression_id=p3_1754934405_P3g5rHByTHtHTz-x&previous_page_section_name=1000',
        hasGuestFavorite: true
      },
      {
        id: 'spokane-4',
        title: 'Apartment in Spokane',
        price: 356,
        rating: 5.0,
        image: "https://c.animaapp.com/me7emf7wZc0xCu/assets/113.jpg",
        href: '/rooms/1217451076976788608?check_in=2025-08-15&check_out=2025-08-17&photo_id=1976956052&source_impression_id=p3_1754934405_P37fg0KetVZ_l5RR&previous_page_section_name=1000',
        hasGuestFavorite: true
      },
      {
        id: 'spokane-5',
        title: 'Loft in Spokane',
        price: 254,
        rating: 4.97,
        image: "https://c.animaapp.com/me7emf7wZc0xCu/assets/114.jpg",
        href: '/rooms/20216860?check_in=2025-08-15&check_out=2025-08-17&photo_id=434784405&source_impression_id=p3_1754934405_P3SsSkJW8lCA8lv8&previous_page_section_name=1000',
        hasGuestFavorite: true
      },
      {
        id: 'spokane-6',
        title: 'Apartment in Spokane',
        price: 242,
        rating: 4.87,
        image: "https://c.animaapp.com/me7emf7wZc0xCu/assets/115.jpg",
        href: '/rooms/50437150?check_in=2025-08-15&check_out=2025-08-17&photo_id=1208814777&source_impression_id=p3_1754934405_P3akeKQ76qzgvov1&previous_page_section_name=1000',
        hasGuestFavorite: false
      },
      {
        id: 'spokane-7',
        title: 'Apartment in Spokane',
        price: 283,
        rating: 4.91,
        image: "https://c.animaapp.com/me7emf7wZc0xCu/assets/116.jpg",
        href: '/rooms/1277758004973250532?check_in=2025-08-15&check_out=2025-08-17&photo_id=2026027077&source_impression_id=p3_1754934405_P3ktccMxVi_U0Kf3&previous_page_section_name=1000',
        hasGuestFavorite: true
      },
      {
        id: 'spokane-8',
        title: 'Home in Spokane',
        price: 571,
        rating: 5.0,
        image: "https://c.animaapp.com/me7emf7wZc0xCu/assets/105.jpg",
        href: '/rooms/819072938659311172?check_in=2025-08-15&check_out=2025-08-17&photo_id=1580885479&source_impression_id=p3_1754934405_P3Ts9cZKjMnVW045&previous_page_section_name=1000',
        hasGuestFavorite: true
      }
    ]
  },
  {
    id: 'tri-cities',
    title: 'Homes in Tri-Cities',
    ariaLabel: 'Homes in Tri-Cities',
    href: '/s/Tri~Cities/homes?place_id=ChIJR6FyPhl7mFQRxXVfzv1W0g8&refinement_paths%5B%5D=%2Fhomes&flexible_trip_lengths%5B%5D=weekend_trip&date_picker_type=FLEXIBLE_DATES&search_type=HOMEPAGE_CAROUSEL_CLICK',
    properties: [
      {
        id: 'tri-cities-1',
        title: 'Home in West Richland',
        price: 377,
        rating: 4.87,
        image: "https://c.animaapp.com/me7emf7wZc0xCu/assets/117.jpg",
        href: '/rooms/882822818546303813?check_in=2025-10-17&check_out=2025-10-19&photo_id=1642366429&source_impression_id=p3_1754934405_P3-hiaTU5lq_AVwk&previous_page_section_name=1000',
        hasGuestFavorite: true
      },
      {
        id: 'tri-cities-2',
        title: 'Guesthouse in Tri-Cities',
        price: 286,
        rating: 4.93,
        image: "https://c.animaapp.com/me7emf7wZc0xCu/assets/118.jpg",
        href: '/rooms/1106887742877793816?check_in=2025-10-03&check_out=2025-10-05&photo_id=1931863798&source_impression_id=p3_1754934405_P3s9hA44on84S8Bk&previous_page_section_name=1000',
        hasGuestFavorite: true
      },
      {
        id: 'tri-cities-3',
        title: 'Guesthouse in Richland',
        price: 286,
        rating: 4.92,
        image: "https://c.animaapp.com/me7emf7wZc0xCu/assets/119.jpg",
        href: '/rooms/1005964253781513949?check_in=2025-10-03&check_out=2025-10-05&photo_id=1878675603&source_impression_id=p3_1754934405_P3fJXtKNsLuG1ulB&previous_page_section_name=1000',
        hasGuestFavorite: true
      },
      {
        id: 'tri-cities-4',
        title: 'Guesthouse in Tri-Cities',
        price: 183,
        rating: 4.87,
        image: "https://c.animaapp.com/me7emf7wZc0xCu/assets/120.jpg",
        href: '/rooms/24375308?check_in=2025-10-03&check_out=2025-10-05&photo_id=1608411200&source_impression_id=p3_1754934405_P3sGT_dymrexKPR1&previous_page_section_name=1000',
        hasGuestFavorite: true
      },
      {
        id: 'tri-cities-5',
        title: 'Home in Richland',
        price: 553,
        rating: 4.95,
        image: "https://c.animaapp.com/me7emf7wZc0xCu/assets/121.jpg",
        href: '/rooms/694793746975531082?check_in=2025-09-05&check_out=2025-09-07&photo_id=1479184583&source_impression_id=p3_1754934405_P3qoLuD6Kj2KCVii&previous_page_section_name=1000',
        hasGuestFavorite: true
      },
      {
        id: 'tri-cities-6',
        title: 'Guest suite in Richland',
        price: 268,
        rating: 4.98,
        image: "https://c.animaapp.com/me7emf7wZc0xCu/assets/122.jpg",
        href: '/rooms/597854406188398146?check_in=2025-10-17&check_out=2025-10-19&photo_id=1774845634&source_impression_id=p3_1754934405_P3F8U1yVZGv0juT0&previous_page_section_name=1000',
        hasGuestFavorite: true
      },
      {
        id: 'tri-cities-7',
        title: 'Home in Tri-Cities',
        price: 320,
        rating: 4.98,
        image: "https://c.animaapp.com/me7emf7wZc0xCu/assets/123.jpg",
        href: '/rooms/814565861350138655?check_in=2025-10-03&check_out=2025-10-05&photo_id=1576483176&source_impression_id=p3_1754934405_P3uMJZksqV1VqWf4&previous_page_section_name=1000',
        hasGuestFavorite: true
      },
      {
        id: 'tri-cities-8',
        title: 'Home in Tri-Cities',
        price: 328,
        rating: 4.95,
        image: "https://c.animaapp.com/me7emf7wZc0xCu/assets/124.jpg",
        href: '/rooms/994991647818995904?check_in=2025-09-05&check_out=2025-09-07&photo_id=1755310821&source_impression_id=p3_1754934405_P31tcPF_GBtxuiYM&previous_page_section_name=1000',
        hasGuestFavorite: true
      }
    ]
  },
  {
    id: 'lincoln-city',
    title: 'Available in Lincoln City this weekend',
    ariaLabel: 'Available in Lincoln City this weekend',
    href: '/s/Lincoln-City/homes?place_id=ChIJd712C3aN6lQRYugsfWoOU3E&refinement_paths%5B%5D=%2Fhomes&date_picker_type=CALENDAR&checkin=2025-08-15&checkout=2025-08-17&search_type=HOMEPAGE_CAROUSEL_CLICK',
    properties: [
      {
        id: 'lincoln-city-1',
        title: 'Aparthotel in Lincoln City',
        price: 543,
        rating: 4.78,
        image: "https://c.animaapp.com/me7emf7wZc0xCu/assets/125.jpg",
        href: '/rooms/47511364?check_in=2025-08-15&check_out=2025-08-17&photo_id=2259571140&source_impression_id=p3_1754934405_P3ivbEC-r5rJpYwc&previous_page_section_name=1000',
        hasGuestFavorite: false
      },
      {
        id: 'lincoln-city-2',
        title: 'Home in Lincoln City',
        price: 657,
        rating: 5.0,
        image: "https://c.animaapp.com/me7emf7wZc0xCu/assets/126.jpg",
        href: '/rooms/1434778834191751563?check_in=2025-08-15&check_out=2025-08-17&photo_id=2236221580&source_impression_id=p3_1754934405_P3aPAlzBsSTZjw3a&previous_page_section_name=1000',
        hasGuestFavorite: false
      },
      {
        id: 'lincoln-city-3',
        title: 'Condo in Neskowin',
        price: 839,
        rating: 4.85,
        image: "https://c.animaapp.com/me7emf7wZc0xCu/assets/127.jpg",
        href: '/rooms/24783614?check_in=2025-08-15&check_out=2025-08-17&photo_id=489273292&source_impression_id=p3_1754934405_P3b9oZOJilcVqTeW&previous_page_section_name=1000',
        hasGuestFavorite: false
      },
      {
        id: 'lincoln-city-4',
        title: 'Shared room in Neskowin',
        price: 160,
        rating: 4.94,
        image: "https://c.animaapp.com/me7emf7wZc0xCu/assets/130.jpg",
        href: '/rooms/17679420?check_in=2025-08-15&check_out=2025-08-17&photo_id=279897488&source_impression_id=p3_1754934405_P3i5ueDpP5LK-nhD&previous_page_section_name=1000',
        hasGuestFavorite: true
      },
      {
        id: 'lincoln-city-5',
        title: 'Home in Lincoln City',
        price: 1955,
        rating: 4.86,
        image: "https://c.animaapp.com/me7emf7wZc0xCu/assets/131.jpg",
        href: '/rooms/41350936?check_in=2025-08-15&check_out=2025-08-17&photo_id=996581583&source_impression_id=p3_1754934405_P3OuJaS0FjLv-WB7&previous_page_section_name=1000',
        hasGuestFavorite: true
      },
      {
        id: 'lincoln-city-6',
        title: 'Condo in Lincoln City',
        price: 1778,
        rating: 4.94,
        image: "https://c.animaapp.com/me7emf7wZc0xCu/assets/128.jpg",
        href: '/rooms/40394488?check_in=2025-08-15&check_out=2025-08-17&photo_id=917109760&source_impression_id=p3_1754934405_P308d5W8_lxvyoPJ&previous_page_section_name=1000',
        hasGuestFavorite: true
      },
      {
        id: 'lincoln-city-7',
        title: 'Cottage in Cloverdale',
        price: 1142,
        rating: 4.97,
        image: "https://c.animaapp.com/me7emf7wZc0xCu/assets/129.jpg",
        href: '/rooms/700255445164255556?check_in=2025-08-15&check_out=2025-08-17&photo_id=1476702999&source_impression_id=p3_1754934405_P3E2k-zmxH2QBqIY&previous_page_section_name=1000',
        hasGuestFavorite: true
      },
      {
        id: 'lincoln-city-8',
        title: 'Apartment in Cloverdale',
        price: 686,
        rating: 4.79,
        image: "https://c.animaapp.com/me7emf7wZc0xCu/assets/132.jpg",
        href: '/rooms/20328403?check_in=2025-08-15&check_out=2025-08-17&photo_id=2248626958&source_impression_id=p3_1754934405_P39oGJ_ZQpA0DAIY&previous_page_section_name=1000',
        hasGuestFavorite: false
      }
    ]
  },
  {
    id: 'seaside',
    title: 'Places to stay in Seaside',
    ariaLabel: 'Places to stay in Seaside',
    href: '/s/Seaside/homes?place_id=ChIJZ2YOtixhk1QRIv0bVPQMZI0&refinement_paths%5B%5D=%2Fhomes&flexible_trip_lengths%5B%5D=weekend_trip&date_picker_type=FLEXIBLE_DATES&search_type=HOMEPAGE_CAROUSEL_CLICK',
    properties: [
      {
        id: 'seaside-1',
        title: 'Condo in Seaside',
        price: 354,
        rating: 4.93,
        image: "https://c.animaapp.com/me7emf7wZc0xCu/assets/133.jpg",
        href: '/rooms/1351034537950214483?check_in=2025-10-24&check_out=2025-10-26&photo_id=2084290814&source_impression_id=p3_1754934405_P3MamnNg7urta3L0&previous_page_section_name=1000',
        hasGuestFavorite: true
      },
      {
        id: 'seaside-2',
        title: 'Apartment in Seaside',
        price: 343,
        rating: 4.95,
        image: "https://c.animaapp.com/me7emf7wZc0xCu/assets/134.jpg",
        href: '/rooms/46450803?check_in=2025-10-31&check_out=2025-11-02&photo_id=1817719673&source_impression_id=p3_1754934405_P3gLVavbg3dpIxzY&previous_page_section_name=1000',
        hasGuestFavorite: true
      },
      {
        id: 'seaside-3',
        title: 'Condo in Seaside',
        price: 377,
        rating: 5.0,
        image: "https://c.animaapp.com/me7emf7wZc0xCu/assets/135.jpg",
        href: '/rooms/1469218368236173868?check_in=2025-10-10&check_out=2025-10-12&photo_id=2280466472&source_impression_id=p3_1754934405_P3MIwJK7SKmE5R9C&previous_page_section_name=1000',
        hasGuestFavorite: true
      },
      {
        id: 'seaside-4',
        title: 'Home in Seaside',
        price: 758,
        rating: 5.0,
        image: "https://c.animaapp.com/me7emf7wZc0xCu/assets/136.jpg",
        href: '/rooms/1239896444495770191?check_in=2025-10-31&check_out=2025-11-02&photo_id=2031215142&source_impression_id=p3_1754934405_P3gCgGEEe-t1vSpo&previous_page_section_name=1000',
        hasGuestFavorite: true
      },
      {
        id: 'seaside-5',
        title: 'Apartment in Seaside',
        price: 317,
        rating: 4.91,
        image: "https://c.animaapp.com/me7emf7wZc0xCu/assets/137.jpg",
        href: '/rooms/1008759661638737088?check_in=2025-10-24&check_out=2025-10-26&photo_id=2027065076&source_impression_id=p3_1754934405_P36SCIRgrxjRat2h&previous_page_section_name=1000',
        hasGuestFavorite: false
      },
      {
        id: 'seaside-6',
        title: 'Condo in Seaside',
        price: 331,
        rating: 4.86,
        image: "https://c.animaapp.com/me7emf7wZc0xCu/assets/138.jpg",
        href: '/rooms/43689570?check_in=2025-10-24&check_out=2025-10-26&photo_id=1015196609&source_impression_id=p3_1754934405_P3q6MVwxZU0maBuD&previous_page_section_name=1000',
        hasGuestFavorite: false
      },
      {
        id: 'seaside-7',
        title: 'Apartment in Seaside',
        price: 361,
        rating: 4.91,
        image: "https://c.animaapp.com/me7emf7wZc0xCu/assets/145.jpg",
        href: '/rooms/1008796700265038817?check_in=2025-10-24&check_out=2025-10-26&photo_id=1894665270&source_impression_id=p3_1754934405_P3zPokjTAtsnksxz&previous_page_section_name=1000',
        hasGuestFavorite: true
      },
      {
        id: 'seaside-8',
        title: 'Condo in Seaside',
        price: 354,
        rating: 4.87,
        image: "https://c.animaapp.com/me7emf7wZc0xCu/assets/146.jpg",
        href: '/rooms/2440542?check_in=2025-10-24&check_out=2025-10-26&photo_id=496184910&source_impression_id=p3_1754934405_P3Zz1yQhVUv9VmDB&previous_page_section_name=1000',
        hasGuestFavorite: true
      }
    ]
  },
  {
    id: 'coeur-dalene',
    title: 'Check out homes in Coeur d\'Alene',
    ariaLabel: 'Check out homes in Coeur d\'Alene',
    href: '/s/Coeur-d\'Alene/homes?place_id=ChIJj3xVuvi0YVMRkFK_BVuZ5V8&refinement_paths%5B%5D=%2Fhomes&flexible_trip_lengths%5B%5D=weekend_trip&date_picker_type=FLEXIBLE_DATES&search_type=HOMEPAGE_CAROUSEL_CLICK',
    properties: [
      {
        id: 'coeur-dalene-1',
        title: 'Apartment in Coeur d\'Alene',
        price: 290,
        rating: 4.99,
        image: "https://c.animaapp.com/me7emf7wZc0xCu/assets/139.jpg",
        href: '/rooms/50089238?check_in=2025-11-07&check_out=2025-11-09&photo_id=1187851727&source_impression_id=p3_1754934405_P3PUI82xWwCjNDJ1&previous_page_section_name=1000',
        hasGuestFavorite: true
      },
      {
        id: 'coeur-dalene-2',
        title: 'Guest suite in Coeur d\'Alene',
        price: 349,
        rating: 4.99,
        image: "https://c.animaapp.com/me7emf7wZc0xCu/assets/140.jpg",
        href: '/rooms/584821500193174202?check_in=2025-11-07&check_out=2025-11-09&photo_id=1484749970&source_impression_id=p3_1754934405_P3pq6dTr8X50G4Yh&previous_page_section_name=1000',
        hasGuestFavorite: true
      },
      {
        id: 'coeur-dalene-3',
        title: 'Guesthouse in Coeur d\'Alene',
        price: 193,
        rating: 5.0,
        image: "https://c.animaapp.com/me7emf7wZc0xCu/assets/141.jpg",
        href: '/rooms/37249413?check_in=2026-04-03&check_out=2026-04-05&photo_id=820959215&source_impression_id=p3_1754934405_P3_uxka33PkdZA1K&previous_page_section_name=1000',
        hasGuestFavorite: false
      },
      {
        id: 'coeur-dalene-4',
        title: 'Guesthouse in Coeur d\'Alene',
        price: 229,
        rating: 4.98,
        image: "https://c.animaapp.com/me7emf7wZc0xCu/assets/142.jpg",
        href: '/rooms/28603627?check_in=2025-09-26&check_out=2025-09-28&photo_id=856671874&source_impression_id=p3_1754934405_P3C8VIJtEYeS06FJ&previous_page_section_name=1000',
        hasGuestFavorite: true
      },
      {
        id: 'coeur-dalene-5',
        title: 'Camper/RV in Coeur d\'Alene',
        price: 284,
        rating: 4.98,
        image: "https://c.animaapp.com/me7emf7wZc0xCu/assets/143.jpg",
        href: '/rooms/668332216499155291?check_in=2025-10-03&check_out=2025-10-05&photo_id=1479939660&source_impression_id=p3_1754934405_P3Ae7KcHrjONrfXF&previous_page_section_name=1000',
        hasGuestFavorite: true
      },
      {
        id: 'coeur-dalene-6',
        title: 'Cabin in Hayden',
        price: 319,
        rating: 4.96,
        image: "https://c.animaapp.com/me7emf7wZc0xCu/assets/144.jpg",
        href: '/rooms/39943198?check_in=2025-10-31&check_out=2025-11-02&photo_id=1386069370&source_impression_id=p3_1754934405_P3QA3wa2L7laXoyc&previous_page_section_name=1000',
        hasGuestFavorite: true
      },
      {
        id: 'coeur-dalene-7',
        title: 'Tiny home in Hayden',
        price: 525,
        rating: 5.0,
        image: "https://c.animaapp.com/me7emf7wZc0xCu/assets/147.jpg",
        href: '/rooms/1246712753625691364?check_in=2025-11-14&check_out=2025-11-16&photo_id=2013880116&source_impression_id=p3_1754934405_P3DTDCV-LZCmInlq&previous_page_section_name=1000',
        hasGuestFavorite: true
      },
      {
        id: 'coeur-dalene-8',
        title: 'Home in Coeur d\'Alene',
        price: 337,
        rating: 4.96,
        image: "https://c.animaapp.com/me7emf7wZc0xCu/assets/148.jpg",
        href: '/rooms/27502545?check_in=2025-08-22&check_out=2025-08-24&photo_id=759017584&source_impression_id=p3_1754934405_P3pu4MCMkYo5U-Vo&previous_page_section_name=1000',
        hasGuestFavorite: true
      }
    ]
  },
  {
    id: 'leavenworth',
    title: 'Popular homes in Leavenworth',
    ariaLabel: 'Popular homes in Leavenworth',
    href: '/s/Leavenworth/homes?place_id=ChIJjfn4pJJNmlQRfu-_CvuVT6E&refinement_paths%5B%5D=%2Fhomes&flexible_trip_lengths%5B%5D=weekend_trip&date_picker_type=FLEXIBLE_DATES&search_type=HOMEPAGE_CAROUSEL_CLICK',
    properties: [
      {
        id: 'leavenworth-1',
        title: 'Apartment in Leavenworth',
        price: 284,
        rating: 4.94,
        image: "https://c.animaapp.com/me7emf7wZc0xCu/assets/149.jpg",
        href: '/rooms/15258241?check_in=2026-01-16&check_out=2026-01-18&photo_id=2080311235&source_impression_id=p3_1754934405_P3ackFoE3EoinVk_&previous_page_section_name=1000',
        hasGuestFavorite: true
      },
      {
        id: 'leavenworth-2',
        title: 'Guest suite in Leavenworth',
        price: 382,
        rating: 4.96,
        image: "https://c.animaapp.com/me7emf7wZc0xCu/assets/150.jpg",
        href: '/rooms/1342896722129623173?check_in=2025-11-14&check_out=2025-11-16&photo_id=2228338117&source_impression_id=p3_1754934405_P3k--2xvoBsQgOcQ&previous_page_section_name=1000',
        hasGuestFavorite: true
      },
      {
        id: 'leavenworth-3',
        title: 'Loft in Leavenworth',
        price: 360,
        rating: 4.93,
        image: "https://c.animaapp.com/me7emf7wZc0xCu/assets/151.jpg",
        href: '/rooms/8848962?check_in=2025-11-14&check_out=2025-11-16&photo_id=719353424&source_impression_id=p3_1754934405_P3hjn0X49FlaayJC&previous_page_section_name=1000',
        hasGuestFavorite: true
      },
      {
        id: 'leavenworth-4',
        title: 'Home in Leavenworth',
        price: 506,
        rating: 4.98,
        image: "https://c.animaapp.com/me7emf7wZc0xCu/assets/152.jpg",
        href: '/rooms/50684412?check_in=2025-11-07&check_out=2025-11-09&photo_id=1902055030&source_impression_id=p3_1754934405_P39BemZzIo3ekrUz&previous_page_section_name=1000',
        hasGuestFavorite: true
      },
      {
        id: 'leavenworth-5',
        title: 'Home in Leavenworth',
        price: 594,
        rating: 4.98,
        image: "https://c.animaapp.com/me7emf7wZc0xCu/assets/153.jpg",
        href: '/rooms/1015600001459769212?check_in=2025-09-12&check_out=2025-09-14&photo_id=1879026090&source_impression_id=p3_1754934405_P3lStG0aD3gatloN&previous_page_section_name=1000',
        hasGuestFavorite: true
      },
      {
        id: 'leavenworth-6',
        title: 'Apartment in Leavenworth',
        price: 472,
        rating: 4.96,
        image: "https://c.animaapp.com/me7emf7wZc0xCu/assets/154.jpg",
        href: '/rooms/6269903?check_in=2025-11-07&check_out=2025-11-09&photo_id=1010523226&source_impression_id=p3_1754934405_P3R7DxKgQFAPAXZl&previous_page_section_name=1000',
        hasGuestFavorite: true
      },
      {
        id: 'leavenworth-7',
        title: 'Boutique hotel in Leavenworth',
        price: 529,
        rating: 4.96,
        image: "https://c.animaapp.com/me7emf7wZc0xCu/assets/155.jpg",
        href: '/rooms/32127451?check_in=2025-10-24&check_out=2025-10-26&photo_id=984637095&source_impression_id=p3_1754934405_P3wDNZik0EbmtAld&previous_page_section_name=1000',
        hasGuestFavorite: true
      },
      {
        id: 'leavenworth-8',
        title: 'Cabin in Leavenworth',
        price: 506,
        rating: 4.98,
        image: "https://c.animaapp.com/me7emf7wZc0xCu/assets/156.jpg",
        href: '/rooms/568791660468524969?check_in=2025-10-31&check_out=2025-11-02&photo_id=1347305735&source_impression_id=p3_1754934405_P3XDKh5xZOzVFGur&previous_page_section_name=1000',
        hasGuestFavorite: true
      }
    ]
  },
  {
    id: 'bend',
    title: 'Stay in Bend',
    ariaLabel: 'Stay in Bend',
    href: '/s/Bend/homes?place_id=ChIJUdLTpf_AuFQRtNEgx6zniBA&refinement_paths%5B%5D=%2Fhomes&flexible_trip_lengths%5B%5D=weekend_trip&date_picker_type=FLEXIBLE_DATES&search_type=HOMEPAGE_CAROUSEL_CLICK',
    properties: [
      {
        id: 'bend-1',
        title: 'Cabin in Bend',
        price: 263,
        rating: 4.99,
        image: "https://c.animaapp.com/me7emf7wZc0xCu/assets/157.jpg",
        href: '/rooms/14747926?check_in=2025-09-19&check_out=2025-09-21&photo_id=1471633000&source_impression_id=p3_1754934406_P3G_CZ5WbKONfwH9&previous_page_section_name=1000',
        hasGuestFavorite: true
      },
      {
        id: 'bend-2',
        title: 'Guesthouse in Bend',
        price: 250,
        rating: 4.96,
        image: "https://c.animaapp.com/me7emf7wZc0xCu/assets/158.jpg",
        href: '/rooms/32092479?check_in=2025-10-31&check_out=2025-11-02&photo_id=1916964055&source_impression_id=p3_1754934406_P3szXGLS6tYVIjUx&previous_page_section_name=1000',
        hasGuestFavorite: true
      },
      {
        id: 'bend-3',
        title: 'Room in Bend',
        price: 183,
        rating: 4.96,
        image: "https://c.animaapp.com/me7emf7wZc0xCu/assets/159.jpg",
        href: '/rooms/7728723?check_in=2025-09-05&check_out=2025-09-07&photo_id=80521966&source_impression_id=p3_1754934406_P3erLVBRPoQjFrmx&previous_page_section_name=1000',
        hasGuestFavorite: true
      },
      {
        id: 'bend-4',
        title: 'Cabin in Bend',
        price: 412,
        rating: 4.93,
        image: "https://c.animaapp.com/me7emf7wZc0xCu/assets/163.jpg",
        href: '/rooms/1014475427201841121?check_in=2025-12-05&check_out=2025-12-07&photo_id=1770923532&source_impression_id=p3_1754934406_P3FtnyPa2CI1UAZB&previous_page_section_name=1000',
        hasGuestFavorite: true
      },
      {
        id: 'bend-5',
        title: 'Room in Bend',
        price: 147,
        rating: 4.99,
        image: "https://c.animaapp.com/me7emf7wZc0xCu/assets/161.jpg",
        href: '/rooms/32375590?check_in=2025-09-05&check_out=2025-09-07&photo_id=750485592&source_impression_id=p3_1754934406_P3CzgDuiLqYGB7FB&previous_page_section_name=1000',
        hasGuestFavorite: true
      },
      {
        id: 'bend-6',
        title: 'Home in Bend',
        price: 274,
        rating: 4.97,
        image: "https://c.animaapp.com/me7emf7wZc0xCu/assets/162.jpg",
        href: '/rooms/20147587?check_in=2025-10-31&check_out=2025-11-02&photo_id=1406215558&source_impression_id=p3_1754934406_P3rx5B-oMOfPlOZb&previous_page_section_name=1000',
        hasGuestFavorite: true
      },
      {
        id: 'bend-7',
        title: 'Cottage in Old Bend',
        price: 697,
        rating: 4.97,
        image: "https://c.animaapp.com/me7emf7wZc0xCu/assets/164.jpg",
        href: '/rooms/1129778308688445220?check_in=2025-11-14&check_out=2025-11-16&photo_id=2037698445&source_impression_id=p3_1754934406_P3alnrkJqgkwT8u5&previous_page_section_name=1000',
        hasGuestFavorite: true
      },
      {
        id: 'bend-8',
        title: 'Apartment in Bend',
        price: 206,
        rating: 4.78,
        image: "https://c.animaapp.com/me7emf7wZc0xCu/assets/160.jpg",
        href: '/rooms/3637975?check_in=2025-10-17&check_out=2025-10-19&photo_id=1547163045&source_impression_id=p3_1754934406_P3TAvZpRxILCf1TX&previous_page_section_name=1000',
        hasGuestFavorite: true
      }
    ]
  }
] as const;
