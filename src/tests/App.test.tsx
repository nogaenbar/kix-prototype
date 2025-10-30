import { describe, it, expect } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import App from '@/App';

describe('App', () => {
  it('should render without crashing', () => {
    render(<App />);
    expect(document.body).toBeTruthy();
  });

  it('should render Dashboard by default', async () => {
    render(<App />);
    // Check for Dashboard title (may appear in navigation and page title)
    await waitFor(() => {
      expect(screen.getAllByText('Dashboard').length).toBeGreaterThan(0);
    });
  });

  it('should render KPI tiles', async () => {
    render(<App />);
    // Check for main KPI
    await waitFor(() => {
      expect(screen.getByText('Open Tickets')).toBeInTheDocument();
    });
  });

  it('should render data tables', async () => {
    render(<App />);
    // Check for table titles (use getAllByText for duplicates)
    await waitFor(() => {
      expect(screen.getAllByText('My Open Tickets').length).toBeGreaterThan(0);
      expect(screen.getAllByText('New Tickets').length).toBeGreaterThan(0);
    });
  });
});

