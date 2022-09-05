
export const COMMON_MESSAGE = {
    SUCCESS: {
        FETCH: (content) => `Get ${content} successfully`,
        CREATE: (content) => `Created ${content} successfully`,
        UPDATE: (content) => `Updated ${content} successfully`,
    },
    ERROR: {
        FETCH: (content) => `Fetch ${content} failed`,
        CREATE: (content) => `Create ${content} failed`,
        UPDATE: (content) => `Update ${content} failed`,
        EXPIRED: (content) => `${content} has expired`,
        EXPIRED_OR_ERROR: (content) => `${content} has expired or has something wrong`,
    },
    REQUIRE: {
        SELECT: (content) => `Please select ${content}`,
        INPUT: (content) => `Please input ${content}`,
    }
}