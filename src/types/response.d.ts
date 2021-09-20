interface ProjectListResponse {
  projects: ProjectItem[]
  total_count: number
  offset: number
  limit: number
}
interface ProjectItem {
  id: number
  name: string
  identifier: string
  description: string
  status: number
  is_public: boolean
  inherit_members: boolean
  custom_fields: CustomField[]
  created_on: string
  updated_on: string
}
interface CustomField {
  id: number
  name: string
  value: string | null
}
