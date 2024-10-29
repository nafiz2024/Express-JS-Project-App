// Create

export const createTask = async (req, res) => {
    return res.json({message: 'Task Created Successfully'})
}

// Read

export const readTask = async (req, res) => {
    return res.json({message: 'Task Read Successfully'})
}

// Update

export const updateTask = async (req, res) => {
    return res.json({message: 'Task Updated Successfully'})
}

// Delete

export const deleteTask = async (req, res) => {
    return res.json({message: 'Task Deleted Successfully'})
}