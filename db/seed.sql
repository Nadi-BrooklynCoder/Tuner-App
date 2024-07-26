\c turner_dev;

INSERT INTO artists (name) VALUES
('John Lennon'),
('Queen'),
('Led Zeppelin'),
('Bob Dylan'),
('Nirvana');

INSERT INTO songs (name, album, time, is_favorite, artist_id) VALUES
('Imagine', 'Imagine', '3:01', true, 1),
('Jealous Guy', 'Imagine', '4:14', true, 1),
('Bohemian Rhapsody', 'A Night at the Opera', '5:55', true, 2),
('Somebody to Love', 'A Day at the Races', '4:56', true, 2),
('Stairway to Heaven', 'Led Zeppelin IV', '8:02', false, 3),
('Whole Lotta Love', 'Led Zeppelin II', '5:34', true, 3),
('Blowin'' in the Wind', 'The Freewheelin'' Bob Dylan', '2:48', true, 4),
('Like a Rolling Stone', 'Highway 61 Revisited', '6:13', true, 4),
('Smells Like Teen Spirit', 'Nevermind', '5:01', false, 5),
('Come As You Are', 'Nevermind', '3:39', true, 5);
