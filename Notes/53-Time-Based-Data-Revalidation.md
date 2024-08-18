# Time-based Data Revalidation in Next.js

## Caching in Next.js

By default, Next.js caches all fetch requests in the data cache, which is a persistent HTTP cache on the server. This helps optimize pages such as a blog post where the content rarely changes.

### Opting Out of Caching

We can opt out of caching by:

-   Using the `cache: "no-store"` option in a fetch request
-   Using a dynamic function before making the fetch request
-   Using a route segment config like `fetch-cache` or `dynamic`

A news website is a great example where you want to make sure you're fetching the latest data at all times.

## The Need for a Middle Ground

The approach of either caching or no caching seems somewhat binary.
What if you seek a middle ground between caching and no caching?

Example: Consider a weather forecast page for a city.
The weather conditions don't change drastically minute by minute, but they do change throughout the day.
In this case:

-   Fetching new data for every user request would be unnecessary and could overload the weather API.
-   Caching the data indefinitely would result in outdated weather information.
-   A reasonable approach would be to fetch updated weather data every 30 minutes. This ensures that users get relatively recent weather information without making excessive API calls.

For such scenarios, Next.js allows us to revalidate the cache.

## Revalidation

Revalidation is the process of purging the Data Cache and re-fetching the latest data.

### Time-based Revalidation

Next.js automatically revalidates data after a certain amount of time has passed.

To implement time-based revalidation:

1. Set the `revalidate` route segment configuration to establish the default revalidation time for a layout or page:

    ```javascript
    export const revalidate = 10; // revalidate every 10 seconds
    ```

> [!NOTE]
> You can also `revalidate` a specific request by setting the `revalidate` option in the next object inside the `headers` object.

```javascript
const response = await fetch('https://api.example.com/data', {
    next: {
        revalidate: 10, // revalidate every 10 seconds
    },
});
```

2. The lowest `revalidate` time across each layout and page of a single route will determine the revalidation frequency of the entire route.

## Benefits of Time-based Revalidation

1. **Balance between Performance and up-to-date info**: Allows you to serve cached data for a specified time, then fetch fresh data.
2. **Reduced Server Load**: Limits the frequency of data fetches while still ensuring data is updated periodically.
3. **Flexibility**: Can be adjusted based on the nature of the data and how frequently it changes.

## Considerations

-   Choose an appropriate revalidation time based on your data update frequency and up-to-date info requirements.
-   Be aware that setting a very low revalidation time might increase server load and API calls.
-   Remember that the lowest revalidation time in a route determines the revalidation frequency for the entire route.

By using time-based revalidation, you can optimize your Next.js application to balance between serving cached data for performance and fetching fresh data to ensure content accuracy.
