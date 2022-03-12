import React from 'react'

export default function info() {
  return (
    <div className="tab-pane active">
                <form>
                  <div className="form-group">
                    <label className="mb-2">Change Language</label>
                    <select className="form-control">
                        <option value="English">English</option>
                        <option value="French">French</option>
                        <option value="English">Portuguese</option>
                    </select>
                  </div>
                </form>
      </div>
  )
}
