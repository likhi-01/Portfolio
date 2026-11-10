
import { useEffect, useState } from "react";
import "./GitHubStats.css";

import {
  FaGithub,
  FaGitAlt,
  FaStar,
  FaUsers,
  FaBook,
} from "react-icons/fa";

function GitHubStats() {
  const [stats, setStats] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    async function getGitHubStats() {
      try {
        const userResponse = await fetch(
          "https://api.github.com/users/likhi-01"
        );

        if (!userResponse.ok) {
          throw new Error("Unable to fetch GitHub profile");
        }

        const userData = await userResponse.json();

        const reposResponse = await fetch(
          "https://api.github.com/users/likhi-01/repos?per_page=100"
        );

        if (!reposResponse.ok) {
          throw new Error("Unable to fetch repositories");
        }

        const reposData = await reposResponse.json();

        const totalStars = reposData.reduce(
          (total, repo) => total + repo.stargazers_count,
          0
        );

        setStats([
          {
            label: "Public Repositories",
            value: userData.public_repos,
            icon: FaBook,
          },
          {
            label: "Followers",
            value: userData.followers,
            icon: FaUsers,
          },
          {
            label: "Stars Earned",
            value: totalStars,
            icon: FaStar,
          },
        ]);
      } catch (err) {
        setError(err.message);
      }
    }

    getGitHubStats();
  }, []);

  return (
    <section className="github-section" id="github">
      <h2>GitHub Stats</h2>

      <p className="github-intro">
        My coding activity and open-source journey on GitHub.
      </p>

      {!stats && !error && <p>Loading GitHub statistics...</p>}

      {error && <p>{error}. Please try again later.</p>}

      {stats && (
        <div className="stats-container">
          {stats.map((stat) => {
            const Icon = stat.icon;

            return (
              <div className="stats-card" key={stat.label}>
                <Icon className="stats-icon" />
                <h3>{stat.value}</h3>
                <p>{stat.label}</p>
              </div>
            );
          })}
        </div>
      )}

      <div className="contribution-card">
        <h3>My GitHub Contributions</h3>
        <p>Contribution activity over the last year</p>

        <img
          src="https://ghchart.rshah.org/40b568/likhi-01"
          alt="GitHub contribution calendar for likhi-01"
          className="github-calendar"
        />
      </div>

      <a
        href="https://github.com/likhi-01"
        target="_blank"
        rel="noreferrer"
        className="github-profile-link"
      >
        <FaGithub /> View My GitHub Profile
      </a>
    </section>
  );
}

export default GitHubStats;
