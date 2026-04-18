import { reactive } from 'vue'

export const globalStore = reactive({
  
  // We upgraded this from an array of numbers to an array of objects
  library: [
    { id: 2, status: 'reading' },
    { id: 7, status: 'will_read' },
    { id: 12, status: 'completed' }
  ],

  // Adds or removes a book
  toggleLibrary(novelId) {
    const index = this.library.findIndex(n => n.id === novelId)
    if (index === -1) {
      // When a user first clicks "Add", it defaults to 'will_read'
      this.library.push({ id: novelId, status: 'will_read' })
    } else {
      this.library.splice(index, 1) 
    }
  },

  // Checks if a book is in the library
  isInLibrary(novelId) {
    return this.library.some(n => n.id === novelId)
  },

  // NEW: Changes the status of a specific book
  updateStatus(novelId, newStatus) {
    const novel = this.library.find(n => n.id === novelId)
    if (novel) {
      novel.status = newStatus
    }
  },

  // NEW: Retrieves the current status to display in the dropdown
  getStatus(novelId) {
    const novel = this.library.find(n => n.id === novelId)
    return novel ? novel.status : 'will_read'
  }
})