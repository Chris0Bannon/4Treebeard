CREATE TABLE "user" (
	"id" serial NOT NULL,
	"username" varchar(255) NOT NULL,
	"password" varchar(255) NOT NULL,
	"Map Location" integer(255) NOT NULL,
	CONSTRAINT "user_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "map" (
	"id" serial NOT NULL,
	"Location Name" varchar(255) NOT NULL,
	CONSTRAINT "map_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "images" (
	"id" serial NOT NULL,
	"Image Name" varchar(255) NOT NULL,
	"Image type" integer(255) NOT NULL,
	CONSTRAINT "images_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "Plot Message" (
	"id" serial NOT NULL,
	"Message Type" integer NOT NULL,
	"Message text" serial(255) NOT NULL,
	CONSTRAINT "Plot Message_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "Message Type" (
	"id" serial NOT NULL,
	"Message Type Name" serial(255) NOT NULL,
	CONSTRAINT "Message Type_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "Image Type" (
	"id" serial NOT NULL,
	"Image Type Name" varchar(255) NOT NULL,
	CONSTRAINT "Image Type_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



ALTER TABLE "user" ADD CONSTRAINT "user_fk0" FOREIGN KEY ("Map Location") REFERENCES "map"("id");


ALTER TABLE "images" ADD CONSTRAINT "images_fk0" FOREIGN KEY ("id") REFERENCES "map"("id");

ALTER TABLE "Plot Message" ADD CONSTRAINT "Plot Message_fk0" FOREIGN KEY ("id") REFERENCES "map"("id");

ALTER TABLE "Message Type" ADD CONSTRAINT "Message Type_fk0" FOREIGN KEY ("id") REFERENCES "Plot Message"("Message Type");

ALTER TABLE "Image Type" ADD CONSTRAINT "Image Type_fk0" FOREIGN KEY ("id") REFERENCES "images"("Image type");

