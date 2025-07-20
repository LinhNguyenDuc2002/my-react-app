export const get = async (url: string) => {
    const response = await fetch(url); // Thay đổi URL cho API của bạn
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
};