export interface RequestTokenResponse {
    success: boolean
    expires_at: string
    request_token: string
}

export interface RequestSessionId{
    success: boolean
    session_id: string
}