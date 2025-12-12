-- Email provider credentials (encrypted)
CREATE TABLE provider_credentials (
    id SERIAL PRIMARY KEY,
    provider_type VARCHAR(50) NOT NULL,
    email_address VARCHAR(255) NOT NULL,
    encrypted_credentials TEXT NOT NULL,
    label_folder_name VARCHAR(255),
    last_authenticated_at TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Newsletters table
CREATE TABLE newsletters (
    id SERIAL PRIMARY KEY,
    provider_id INTEGER REFERENCES provider_credentials(id),
    message_id VARCHAR(255) UNIQUE NOT NULL,
    thread_id VARCHAR(255),
    sender_email VARCHAR(255) NOT NULL,
    sender_name VARCHAR(255),
    subject TEXT,
    date_received TIMESTAMP WITH TIME ZONE NOT NULL,
    plain_text_content TEXT,
    html_content TEXT,
    headers JSONB,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Links table
CREATE TABLE links (
    id SERIAL PRIMARY KEY,
    newsletter_id INTEGER REFERENCES newsletters(id) ON DELETE CASCADE,
    original_url TEXT NOT NULL,
    resolved_url TEXT,
    link_text TEXT,
    position_in_email INTEGER,
    is_tracking_link BOOLEAN DEFAULT FALSE,
    resolution_status VARCHAR(50) DEFAULT 'pending',
    resolution_attempted_at TIMESTAMP WITH TIME ZONE,
    resolution_error TEXT,
    retry_count INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Sync state tracking
CREATE TABLE sync_state (
    id SERIAL PRIMARY KEY,
    provider_id INTEGER REFERENCES provider_credentials(id),
    last_sync_time TIMESTAMP WITH TIME ZONE,
    last_history_id VARCHAR(255),
    emails_synced INTEGER DEFAULT 0,
    sync_status VARCHAR(50),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Weekly link analytics
CREATE TABLE link_stats (
    id SERIAL PRIMARY KEY,
    resolved_url TEXT NOT NULL,
    week_start DATE NOT NULL,
    appearance_count INTEGER DEFAULT 1,
    newsletter_ids INTEGER[],
    UNIQUE(resolved_url, week_start)
);

-- Indexes for performance
CREATE INDEX idx_newsletters_date ON newsletters(date_received DESC);
CREATE INDEX idx_newsletters_sender ON newsletters(sender_email);
CREATE INDEX idx_newsletters_message_id ON newsletters(message_id);
CREATE INDEX idx_newsletters_provider ON newsletters(provider_id);
CREATE INDEX idx_links_newsletter ON links(newsletter_id);
CREATE INDEX idx_links_resolved ON links(resolved_url);
CREATE INDEX idx_links_status ON links(resolution_status);
CREATE INDEX idx_link_stats_week ON link_stats(week_start DESC);
