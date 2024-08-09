# Organizing Files in Next.js

Next.js provides several features to help you organize your files and routes effectively.
These include co-location of files, private folders, and route grouping.

## Co-Location of Files

In the app router, a route is accessible only if you default export a React component from a `page.js` or `page.tsx` file.
If you create a directory with other file names or a `page.js`/`.tsx` without a default export, those routes will not be accessible.

> [!NOTE]
> While different files lead to a 404 page, having a `page.js`/`.tsx` file without a default export can lead to errors.

## Private Folders

You can create private folders within your app router that are not accessible as routes.
This is done by prefixing the folder name with an underscore (`_`). Even if you have a `page.js` or `page.tsx` file inside such a folder, it won't be accessible as a route.

### Example

-   `_privateFolder/page.tsx` will not be accessible as a route.

## Route Grouping

Route grouping allows you to organize your routes without affecting the URL structure.
This is achieved by creating a folder with a name surrounded by parentheses `()`. The folder name will be omitted from the URL.

### Example

If you have a folder named `(auth)` containing `login` and `register` folders with their respective `page.js`/`.tsx` files, the routes will be:

-   `/login`
-   `/register`

The `(auth)` folder is used for organization and does not appear in the URL.

### How to Implement

1. **Create a Grouping Folder**: Use parentheses around the folder name, e.g., `(auth)`.
2. **Add Routes**: Inside the grouping folder, add your route folders and `page.js`/`.tsx` files.

By using these techniques, you can maintain a clean and organized file structure in your Next.js application, making it easier to manage and scale your project.
