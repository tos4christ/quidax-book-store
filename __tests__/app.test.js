import app from '../src/index';

describe('app module', () => {
  test('it exists', async () => {
    expect(app).toBeDefined();
  });

  test('it returns program name with Quidax', async () => {
    const result = await app();
    const quidaxCode = (result || '').indexOf('Quidax');
    expect(quidaxCode).toBeGreaterThanOrEqual(0);
  });
});
