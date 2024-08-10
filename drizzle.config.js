/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.tsx",
    dialect: 'postgresql',
    dbCredentials: {
      url: "postgresql://neonDB_owner:8MGxt5TqVFeC@ep-rough-sun-a1d4fchl.ap-southeast-1.aws.neon.tech/neonDB?sslmode=require",
    }
  };
  