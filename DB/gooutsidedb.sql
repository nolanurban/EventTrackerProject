-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema gooutsidedb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `gooutsidedb` ;

-- -----------------------------------------------------
-- Schema gooutsidedb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `gooutsidedb` DEFAULT CHARACTER SET utf8 ;
USE `gooutsidedb` ;

-- -----------------------------------------------------
-- Table `activity`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `activity` ;

CREATE TABLE IF NOT EXISTS `activity` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `user`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `user` ;

CREATE TABLE IF NOT EXISTS `user` (
  `id` INT NOT NULL,
  `username` VARCHAR(45) NULL,
  `password` VARCHAR(45) NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `username_UNIQUE` (`username` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `daily`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `daily` ;

CREATE TABLE IF NOT EXISTS `daily` (
  `id` INT NOT NULL,
  `description` TEXT NULL,
  `image_url` VARCHAR(45) NULL,
  `date` VARCHAR(45) NOT NULL,
  `activity_id` INT NOT NULL,
  `user_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_daily_activity_idx` (`activity_id` ASC),
  INDEX `fk_daily_user1_idx` (`user_id` ASC),
  CONSTRAINT `fk_daily_activity`
    FOREIGN KEY (`activity_id`)
    REFERENCES `activity` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_daily_user1`
    FOREIGN KEY (`user_id`)
    REFERENCES `user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `user_has_daily`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `user_has_daily` ;

CREATE TABLE IF NOT EXISTS `user_has_daily` (
  `user_id` INT NOT NULL,
  `daily_id` INT NOT NULL,
  PRIMARY KEY (`user_id`, `daily_id`),
  INDEX `fk_user_has_daily_daily1_idx` (`daily_id` ASC),
  INDEX `fk_user_has_daily_user1_idx` (`user_id` ASC),
  CONSTRAINT `fk_user_has_daily_user1`
    FOREIGN KEY (`user_id`)
    REFERENCES `user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_user_has_daily_daily1`
    FOREIGN KEY (`daily_id`)
    REFERENCES `daily` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

SET SQL_MODE = '';
DROP USER IF EXISTS gouser@localhost;
SET SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
CREATE USER 'gouser'@'localhost' IDENTIFIED BY 'gouser';

GRANT SELECT, INSERT, TRIGGER, UPDATE, DELETE ON TABLE * TO 'gouser'@'localhost';

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `activity`
-- -----------------------------------------------------
START TRANSACTION;
USE `gooutsidedb`;
INSERT INTO `activity` (`id`, `name`) VALUES (1, 'Walk');
INSERT INTO `activity` (`id`, `name`) VALUES (2, 'Run');
INSERT INTO `activity` (`id`, `name`) VALUES (3, 'Hunting');
INSERT INTO `activity` (`id`, `name`) VALUES (4, 'Fishing');
INSERT INTO `activity` (`id`, `name`) VALUES (5, 'Biking');
INSERT INTO `activity` (`id`, `name`) VALUES (6, 'Gym');
INSERT INTO `activity` (`id`, `name`) VALUES (7 , 'Shopping');
INSERT INTO `activity` (`id`, `name`) VALUES (8, 'Drive');
INSERT INTO `activity` (`id`, `name`) VALUES (9, 'Date');
INSERT INTO `activity` (`id`, `name`) VALUES (10, 'Disc Golf');
INSERT INTO `activity` (`id`, `name`) VALUES (11, 'Basketball');
INSERT INTO `activity` (`id`, `name`) VALUES (12, 'Archery Range');
INSERT INTO `activity` (`id`, `name`) VALUES (13, 'Shooting Range');
INSERT INTO `activity` (`id`, `name`) VALUES (14, 'Skateboarding');
INSERT INTO `activity` (`id`, `name`) VALUES (15, 'Swimming');
INSERT INTO `activity` (`id`, `name`) VALUES (16, 'Badminton');
INSERT INTO `activity` (`id`, `name`) VALUES (17, 'Pickleball');

COMMIT;


-- -----------------------------------------------------
-- Data for table `user`
-- -----------------------------------------------------
START TRANSACTION;
USE `gooutsidedb`;
INSERT INTO `user` (`id`, `username`, `password`) VALUES (1, 'nollie', 'nollie');
INSERT INTO `user` (`id`, `username`, `password`) VALUES (2, 'bobby', 'bobby');

COMMIT;


-- -----------------------------------------------------
-- Data for table `daily`
-- -----------------------------------------------------
START TRANSACTION;
USE `gooutsidedb`;
INSERT INTO `daily` (`id`, `description`, `image_url`, `date`, `activity_id`, `user_id`) VALUES (1, 'It was really nice out and I didn\'t die.', NULL, '2022-11-05', 1, 1);
INSERT INTO `daily` (`id`, `description`, `image_url`, `date`, `activity_id`, `user_id`) VALUES (2, 'It was pretty cold and I didn\'t do that great', NULL, '2022-11-04', 13, 1);
INSERT INTO `daily` (`id`, `description`, `image_url`, `date`, `activity_id`, `user_id`) VALUES (3, 'I had a ton of problems but it was still great to get outside.', NULL, '2022-11-03', 13, 1);
INSERT INTO `daily` (`id`, `description`, `image_url`, `date`, `activity_id`, `user_id`) VALUES (4, 'I should\'ve spent more time doing it but I just needed to hit that euphoric runners high.', NULL, '2022-11-02', 2, 1);

COMMIT;

