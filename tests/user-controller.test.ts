// tests/api.spec.ts
import { test, expect } from '@playwright/test';
let baseURL: string = 'http://localhost:3000/users';

test.describe('User management API for empty users', () => {
    test('GET / - should return empty when no users', async ({ request }) => {
        const response = await request.get(`${baseURL}`);
        expect(response.status()).toBe(200);
        const responseBody = await response.text()
        expect(responseBody).toBe('[]');
    });
})

test.describe('User management API for existing users', () => {

    test.skip('GET /:id - should return a user by ID', async ({ request }) => {
        const response = await request.get(`${baseURL}`+'/88');
        expect(response.status()).toBe(200);
        const responseBody = await response.json()
        expect(responseBody.id).toBe(88);
    });

    test.skip('GET /:id - should return 404 if user not found', async ({ request }) => {
        const response = await request.get(`${baseURL}`+'/89');
        expect(response.status()).toBe(404);
        const responseBody = await response.json()
        expect(responseBody.message).toBe('User not found');
    });

    test('POST / - should add a new user', async ({ request }) => {
        const response = await request.post(`${baseURL}`);
        expect(response.status()).toBe(201);
        const responseBody = await response.json()
        expect(responseBody.id).toBeDefined();
    });

    test('DELETE /:id - should delete a user by ID', async ({ request }) => {
        const response = await request.post(`${baseURL}`);
        expect(response.status()).toBe(201);
        const responseBody = await response.json()
        expect(responseBody.id).toBeDefined();
        const deleteResponse = await request.delete(`${baseURL}`+ '/' + responseBody.id);
        expect(deleteResponse.status()).toBe(200);
    });

    test('DELETE /:id - should return 404 if user not found', async ({ request }) => {
        const response = await request.post(`${baseURL}`);
        expect(response.status()).toBe(201);
        const responseBody = await response.json()
        expect(responseBody.id).toBeDefined();
        const deleteResponse = await request.delete(`${baseURL}`+ '/' + responseBody.id);
        expect(deleteResponse.status()).toBe(200);
        const deleteAgainResponse = await request.delete(`${baseURL}`+ '/' + responseBody.id);
        expect(deleteAgainResponse.status()).toBe(404);
    });


});
