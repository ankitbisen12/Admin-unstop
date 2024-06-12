

export const generateYAxis = (test: any[] ) => {
  const yAxisLabels = [];
  const highestRecord = Math.max(...test.map((t) => t.marks));
  const topLabel = Math.ceil(highestRecord / 50) * 50;

  for (let i = topLabel; i >= 0; i -= 50) {
    yAxisLabels.push(`${i}`);
  }

  return { yAxisLabels, topLabel };
};

export const generatePagination = (currentPage: number, totalPages: number) => {
  // If the total number of pages is 7 or less,
  // display all pages without any ellipsis.
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  // If the current page is among the first 3 pages,
  // show the first 3, an ellipsis, and the last 2 pages.
  if (currentPage <= 3) {
    return [1, 2, 3, "...", totalPages - 1, totalPages];
  }

  // If the current page is among the last 3 pages,
  // show the first 2, an ellipsis, and the last 3 pages.
  if (currentPage >= totalPages - 2) {
    return [1, 2, "...", totalPages - 2, totalPages - 1, totalPages];
  }

  // If the current page is somewhere in the middle,
  // show the first page, an ellipsis, the current page and its neighbors,
  // another ellipsis, and the last page.
  return [
    1,
    "...",
    currentPage - 1,
    currentPage,
    currentPage + 1,
    "...",
    totalPages,
  ];
};

export const duration = (str: string) => {
  const arr = str.split(":");
  const result = arr[0].padStart(2, "0");
  return result;
};

export const getDateDayMonth = (createdAt: any) => {
  const date = new Date(createdAt);

  // Array of month names
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // Get the day, month, and year
  const day = date.getDate();
  const month = monthNames[date.getMonth()]; // getMonth() returns month from 0 to 11
  const year = date.getFullYear();

  // Format the day to always have 2 digits
  const formattedDay = String(day).padStart(2, "0");

  // Return the formatted date string
  return `${formattedDay} ${month} ${year}`;
};

export const getName = (str: string): string => {
  const arr = str.split(" ");
  const ans = arr.map((el) => el.charAt(0).toUpperCase());

  return ans.join("");
};

export const applyPadd = (no: number | string) => {
  const str = String(no);
  return str.padStart(2, "0");
};

export const getBgColor = (i: number) => {
  switch (i) {
    case 0:
      return "bg-indigo-500";
    case 1:
      return "bg-pink-500";
    case 2:
      return "bg-logo-100";
    default:
      return "bg-gray-100";
  }
};

export const getTitle = (str: string) => {
  switch (str) {
    case "/dashboard":
      return "Dashboard";
    case "/dashboard/assessment":
      return "My Assessment";
    case "/dashboard/library":
      return "My Library";
    case "/dashboard/admin":
      return "Admin";
    case "/dashboard/assessment/create":
      return "New Assessment";
    default:
      if (str.startsWith("/dashboard/admin") && str.endsWith("/edit")) {
        return "Edit Admin";
      }
      if (str.startsWith("/dashboard/assessment") && str.endsWith("/edit")) {
        return "Edit Assessment";
      }
      break;
  }
};
