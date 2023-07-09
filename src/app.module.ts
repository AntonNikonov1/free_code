import { Module } from "@nestjs/common";
import { AuthModule } from "src/auth/auth.module";
import { BookmarkModule } from "src/bookmark/bookmark.module";

@Module({
  imports: [AuthModule, AuthModule, BookmarkModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
