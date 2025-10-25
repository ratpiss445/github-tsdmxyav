/*
  # Create Artists Table

  1. New Tables
    - `artists`
      - `id` (uuid, primary key) - Unique identifier for each artist
      - `name` (text, not null) - Artist name or stage name
      - `profile_image_url` (text, not null) - URL to artist's Spotify profile picture
      - `spotify_url` (text, not null) - Direct link to artist's Spotify page
      - `monthly_listeners` (integer, default 0) - Number of monthly listeners on Spotify
      - `display_order` (integer, default 0) - Order for displaying artists (lower numbers first)
      - `created_at` (timestamptz, default now()) - Timestamp of when artist was added
      
  2. Security
    - Enable RLS on `artists` table
    - Add policy for public read access (artists are public information)
    - Add policy for authenticated users to manage artists (admin access)

  3. Notes
    - Public read access allows the artists page to be viewed by anyone
    - Only authenticated users can create, update, or delete artists
    - Display order allows manual sorting of featured artists
*/

CREATE TABLE IF NOT EXISTS artists (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  profile_image_url text NOT NULL,
  spotify_url text NOT NULL,
  monthly_listeners integer DEFAULT 0,
  display_order integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE artists ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view artists"
  ON artists
  FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Authenticated users can insert artists"
  ON artists
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update artists"
  ON artists
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete artists"
  ON artists
  FOR DELETE
  TO authenticated
  USING (true);

CREATE INDEX IF NOT EXISTS artists_display_order_idx ON artists(display_order);