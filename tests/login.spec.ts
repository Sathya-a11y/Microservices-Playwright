import { test, expect } from '@playwright/test';

const BASE_URL = 'http://localhost:8080/api/login';

test.describe('Login Microservice API Tests', () => {
    test('Verify registeration of User successful', async ({ request }) => {
        const response = await request.post(`${BASE_URL}/register`, {
            data: { username: 'loginuser', password: 'welcome321' },
        });
        expect(response.status()).toBe(201);
        const responseBody = await response.json();
        expect(responseBody.message).toBe('User testuser registered successfully.');
    });

    test('Authenticate User', async ({ request }) => {
        const response = await request.post(`${BASE_URL}/authenticate`, {
            data: { username: 'loginuser', password: 'welcome321' },
        });
        expect(response.status()).toBe(200);
        const responseBody = await response.json();
        expect(responseBody.message).toBe('Authentication successful.');
    });

    test('Delete User', async ({ request }) => {
        const response = await request.delete(`${BASE_URL}/testuser`);
        expect(response.status()).toBe(200);
        const responseBody = await response.json();
        expect(responseBody.message).toBe('User testuser deleted successfully.');
    });
});
