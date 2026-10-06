import { createMvcApp, startServer } from "@andrewthecoder/erwinmvc";

async function main() {
  const { app } = await createMvcApp({
    viewsPath: "src/views",
    publicPath: "public",
  });

  // Root route - displays welcome page
  app.get("/", (req: any, res: any) => {
    res.render("index", { title: "Welcome" });
  });

  // Add your routes here
  // Example: app.get("/users", UsersController.index);

  // Start server
  startServer(app);
}

main().catch((err) => {
  console.error("Failed to start server:", err);
  process.exit(1);
});
