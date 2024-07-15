import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import NyTimesCard from "../components/NyTimeCard"; // Adjust the import path as necessary

const mockArticle = {
  id: "1",
  title: "Test Article",
  published_date: "2024-07-15",
  byline: "By Test Author",
  media: [
    {
      "media-metadata": [{}, { url: "https://example.com/image.jpg" }],
    },
  ],
};

const renderWithRouter = (ui, { route = "/" } = {}) => {
  window.history.pushState({}, "Test page", route);

  return render(ui, { wrapper: BrowserRouter });
};

describe("NyTimesCard Component", () => {
  test("renders correctly with provided props", () => {
    renderWithRouter(<NyTimesCard article={mockArticle} />);

    expect(screen.getByText(mockArticle.title)).toBeInTheDocument();
    expect(screen.getByText(mockArticle.published_date)).toBeInTheDocument();
    expect(screen.getByText(mockArticle.byline)).toBeInTheDocument();
    expect(screen.getByRole("img")).toHaveAttribute(
      "src",
      mockArticle.media[0]["media-metadata"][1].url
    );
  });

  test("navigates to the correct URL when clicked", () => {
    const { container } = renderWithRouter(
      <NyTimesCard article={mockArticle} />
    );

    fireEvent.click(container.firstChild);

    expect(window.location.pathname).toBe(`/details/${mockArticle.id}`);
  });
});
