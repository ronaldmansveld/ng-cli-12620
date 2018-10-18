import { TestService } from './test.service';

describe('TestService', () => {
  let service: TestService;

  beforeEach(() => {
    service = new TestService();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return empty array when getting items', () => {
    expect(service.getItems().length).toBe(0);
  });

  it('should return set items', () => {
    service.addItem('test');
    const items = service.getItems();
    expect(items.length).toBe(1);
    expect(items).toContain('test');
  });
});
