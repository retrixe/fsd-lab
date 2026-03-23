function Projects() {
  return (
    <section>
      <h2>Projects</h2>
      <p>I have many different open-source projects on my GitHub, my major work is listed here.</p>
      <br />
      <h3>
        Open-source contributions — To various projects over time, actively contributing to certain
        projects
      </h3>
      <p>
        I’ve submitted open-source contributions over time to Chromium (Google Chrome), Next.js
        (React web framework), React Native (cross-platform app framework), SpigotMC (game software)
        and other smaller projects like KDE Connect (app for linking phones and PCs).
      </p>
      <br />
      <h3>EnderChat — Mobile chat app for Minecraft servers</h3>
      <p>
        An open-source app in React Native for talking with others in the Minecraft game from your
        phone, this required tackling many technical challenges such as handling raw bytes,
        performing compression and encryption in JavaScript performantly, binding native libraries
        to JS, reverse engineering the game’s TCP protocol, etc.
      </p>
      <br />
      <h3>Octyne — Open-source process manager</h3>
      <p>
        Full-featured daemon for managing applications and services on headless servers, including
        an API and web UI complete with file management.
      </p>
    </section>
  )
}

export default Projects
